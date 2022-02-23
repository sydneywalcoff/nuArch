import { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const initialTodos = [
    {
      _id: "1234",
      todo: "walk dog",
      completed: false,
    },
    {
      _id: "2345",
      todo: "do dishes",
      completed: true,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const statusHandler = (completed) => {
    if (completed === false) return "[ ]";
    else return "[x]";
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const closeHandler = ( _id) => {
    const selectedTodoIndex = todos.findIndex(el => el._id === _id);
    const temp = todos;
    temp.splice(selectedTodoIndex,1)
    console.log(temp)
    setTodos(temp);
  };

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
              <td>{statusHandler(todo.completed)}</td>
              <td>{todo.todo}</td>
              <td onClick={() => {closeHandler(todo._id)}} className="delete">-</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={submitHandler}>
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
