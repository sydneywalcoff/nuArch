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

    return (
        <div className="wrapper">
            <header className="header">
                <h1>todo app</h1>
            </header>
            <main>
                <div className="todo-container">
                    <h2 className="container-title">Todos</h2>
                    <table>
                        <tr>
                            <th scope="col">Status</th>
                            <th scope="col">Todo</th>
                        </tr>
                        {todos.map((todo) => (
                            <tr>
                                <td>{todo.status === true ? '[x]' : '[ ]'}</td>
                                <td>{todo.todo}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </main>
        </div>
    );
}

export default App;
