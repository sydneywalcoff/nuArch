import "./App.css";

function App() {
  const todos = [
    {
      todo: "walk dog",
      completed: false,
    },
    {
      todo: "do dishes",
      completed: true,
    },
  ];

  const statusHandler = (todo) => {
    if(todo.completed === false) return '[ ]';
    else return '[x]'
  };

  return (
    <main className="wrapper">
      <div className="todo-container">
        <h2 className="container-title">Todos</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Todo</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, i) => (
              <tr key={i}>
                <td>
                  {statusHandler(todo)}
                </td>
                <td>{todo.todo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <form action="submit">
          <label htmlFor="input">add todo:</label>
          <input name="input" type="text" />
          <button type="submit">+</button>
        </form>
      </div>
    </main>
  );
}

export default App;
