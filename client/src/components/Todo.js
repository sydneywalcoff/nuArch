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
  const [inputState, setInputState] = useState("add a todo");

  const statusHandler = (completed) => {
    if (completed === false) return "[ ]";
    else return "[x]";
  };

  const changeStatusHandler = (todo) => {
    const selectedTodoIndex = todos.findIndex((el) => el._id === todo._id);
    const newStatus = !todo.completed;
    const temp = [...todos];
    temp[selectedTodoIndex].completed = newStatus;
    setTodos(temp);
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const closeHandler = (_id) => {
    const selectedTodoIndex = todos.findIndex((el) => el._id === _id);
    const temp = [...todos];
    temp.splice(selectedTodoIndex, 1);
    setTodos(temp);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(inputState.includes('edit')) {
        const tempInput = inputState;
        const prevVal = tempInput.split(' ').splice(1,5).join(' ');
        const selectedTodoIndex = todos.findIndex(el => el.todo === prevVal);
        const temp = [...todos];
        temp[selectedTodoIndex].todo = inputValue;
        setTodos(temp);
        return;
    }
    const todoObj = {
      _id: Math.random() * 100,
      todo: inputValue,
      completed: false,
    };
    const temp = [...todos];
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
              <td
                onClick={() => {
                  changeStatusHandler(todo);
                }}
              >
                {statusHandler(todo.completed)}
              </td>
              <td
                onClick={() => {
                    setInputState(`edit ${todo.todo}`);
                }}
              >
                {todo.todo}
              </td>
              <td
                onClick={() => {
                  closeHandler(todo._id);
                }}
                className="delete"
              >
                -
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={submitHandler}>
        <input
          name="input"
          type="text"
          placeholder={inputState}
          onChange={changeHandler}
          value={inputValue}
        />
        <button>+</button>
      </form>
    </div>
  );
};

export default Todo;
