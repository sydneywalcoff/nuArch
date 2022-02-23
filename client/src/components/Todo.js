import { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const initialTodos = [
    {
      todo: "walk dog",
      completed: false,
    },
    {
      todo: "do dishes",
      completed: true,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const statusHandler = (todo) => {
    if (todo.completed === false) return "[ ]";
    else return "[x]";
  };

  const changeHandler = (e) => [setInputValue(e.target.value)];

  const submitHandler = (e) => {
    e.preventDefault();
    const todoObj = {
      todo: inputValue,
      completed: false,
    };
    const temp = todos;
    temp.push(todoObj);
    setTodos(temp);
    setInputValue("");
  };
  return (
    <div className="todo-container">
      <h2 className="container-title">Todos</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Todo</th>
            <th scope="col">Delete?</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => (
            <tr key={i}>
              <td>{statusHandler(todo)}</td>
              <td>{todo.todo}</td>
              <td>x</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form action="POST" onSubmit={submitHandler}>
        <input
          name="input"
          type="text"
          placeholder="add todo"
          onChange={changeHandler}
          value={inputValue}
        />
        <button>+</button>
      </form>
    </div>
  );
};

export default Todo;
