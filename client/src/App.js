import "./App.css";

function App() {
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
                      <tr>
                        <td>[ ]</td>
                        <td>walk dog</td>
                      </tr>
                      <tr>
                        <td>[x]</td>
                        <td>do dishes</td>
                      </tr>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default App;
