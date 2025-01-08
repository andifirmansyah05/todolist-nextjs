"use client";

import { Dialog } from "@radix-ui/themes";
import { useActionState } from "react";
import { create } from "../action";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const FormTodo = () => {
  const [state, actionForm, isPending] = useActionState(create, null);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="flex justify-center items-center gap-1">
          <h1 className="text-blue-600">Tambah</h1>
          <PlusCircledIcon color="#2563eb" width={25} height={25} />
        </button>
      </Dialog.Trigger>
      <Dialog.Content className="fixed w-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow-xl outline outline-1 outline-gray-200 ">
        <Dialog.Title className="text-xl font-bold">
          Form Todo List
        </Dialog.Title>
        <form action={actionForm} className="flex flex-col mt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Masukkan Todo</label>
            <p
              className={
                state?.message === "success" ? "text-green-500" : "text-red-500"
              }
            >
              {state?.message || " "}
            </p>
            <input className="w-full p-2" type="text" name="title" required />
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <Dialog.Close>
              <button className="py-1 px-4">Cancel</button>
            </Dialog.Close>
            <button
              type="submit"
              disabled={isPending}
              className="bg-green-400 py-1 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default FormTodo;
