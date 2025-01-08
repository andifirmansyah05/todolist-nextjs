import React, { useActionState } from "react";
import { remove } from "../action";

const ButtonDelete = ({ id }: { id: string }) => {
  const deleteWithId = remove.bind(null, null, id);
  const [, actionDelete, isPending] = useActionState(deleteWithId, null);
  return (
    <form action={actionDelete}>
      <button
        type="submit"
        disabled={isPending}
        className="bg-red-400 text-sm px-3 py-1 rounded-md"
      >
        Delete
      </button>
    </form>
  );
};

export default ButtonDelete;
