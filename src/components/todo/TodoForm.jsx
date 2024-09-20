import { useState } from "react";
import { useCreateTodoMutation } from "../../hooks/useTodoMutation";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { mutate } = useCreateTodoMutation();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    const newTodoObj = {
      text: newTodo,
      completed: false,
    };

    mutate(newTodoObj);

    setNewTodo("");
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-4">
      <input
        className="flex-1 p-2 border-black rounded-lg outline-none text-base text-[#333333 bg-white transition-color focus:border-[#582be7]]"
        type="text"
        name="todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button
        className="text-white bg-[#582be7] py-2 px-4 rounded-lg cursor-pointer hover:opacity-80"
        type="submit"
        color="#582be7"
      >
        추가하기
      </button>
    </form>
  );
};

export default TodoForm;
