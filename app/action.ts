"use server";

import { revalidateTag } from "next/cache";
import { z } from "zod";

// membuat data todo list baru yang ditambahkan ke API
export async function create(state: unknown, formData: FormData) {
  //   inisiasi input yang dimasukkan ke data
  const schema = z.object({
    title: z.string().min(1),
  });

  // mengurai data
  const parseData = schema.safeParse({
    title: formData.get("title"),
  });

  // menampilkan pesan bila gagal parseData
  if (!parseData.success) {
    return { message: parseData.error.errors[0].message };
  }

  // mengambil data input
  const data = parseData.data;

  // menambah data ke API
  const rest = await fetch(process.env.NEXT_PUBLIC_API as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      completed: false,
    }),
  });

  // cek menambah data berhasil atau tidak
  if (!rest.ok) {
    return { message: "failed to create" };
  }

  // merefresh fetch agar fetch ulang
  revalidateTag("todo");

  // mengembalikan pesan success bila create berhasil
  return { message: "success" };
}

// menghapus data dari API
export async function remove(state: unknown, id: string) {
  // melakukan delete data sesuai id pada API
  const rest = await fetch(`${process.env.NEXT_PUBLIC_API}/${id}`, {
    method: "DELETE",
  });

  // cek apakah penghapusan berhasil
  if (!rest.ok) {
    return { message: "failed to delete" };
  }

  // merefresh fetch agar fetch ulang
  revalidateTag("todo");

  // mengembalikan pesan success bila penghapusan berhasil
  return {message: "seccess"}
}
