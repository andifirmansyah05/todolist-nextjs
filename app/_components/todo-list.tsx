"use client";

import Link from "next/link";
import React from "react";
import { DataTodo } from "../_utils/defination";
import ButtonDelete from "./button-delete";
import { useRouter } from "next/navigation";

const TodoListPage = ({ todo }: { todo: DataTodo }) => {
  const route = useRouter();

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    await fetch(`${process.env.NEXT_PUBLIC_API}/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: e.target.checked,
      }),
    });

    route.refresh();
  }
  return (
    <div className="shadow-xl w-72 p-4 rounded-md outline outline-1 outline-gray-200">
      <div className="flex justify-between mb-11">
        <Link href={`todo/${todo.id}`}>
          <p className="text-lg">{todo.title}</p>
        </Link>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        />
      </div>
      <ButtonDelete id={todo.id} />
    </div>
  );
};

export default TodoListPage;
