import TodoListPage from "./_components/todo-list";
import { DataTodo } from "./_utils/defination";
import FormTodo from "./_components/form-todo";

const HomePage = async () => {
  // fetch data dari API
  const rest = await fetch(process.env.NEXT_PUBLIC_API as string, {
    next: {
      tags: ["todo"],
    },
  });
  // fetch rest agar menjadi object
  const data: DataTodo[] = await rest.json();
  // console.log(data);

  return (
    <main className="p-8 ">
      <div className="flex justify-between border-b-2 mb-3">
        <h1 className="text-2xl font-bold mb-3">Todo List</h1>
        {/* Dialog Form Todo List */}
        <FormTodo />
        {/* End Dialog Form Todo List */}
      </div>
      {/* Memunculkan Todo List yang ada di dalam API */}
      <section className="flex flex-wrap gap-4">
        {!!data &&
          data.map((todo) => (
            <div key={todo.id}>
              <TodoListPage todo={todo} />
            </div>
          ))}
      </section>
      {/* End Memunculkan Todo List yang ada di dalam API */}
    </main>
  );
};

export default HomePage;
