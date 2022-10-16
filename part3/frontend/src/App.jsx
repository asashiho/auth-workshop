import { TodoProvider } from "./context/TodoContext";
import Todo from "./components/todo/Todo";
import Todos from "./components/todos/Todos";

import "./App.css";

const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

function App() {
  
  return (
    <div>
      <p class="text-muted">{BACKEND_API_URL}</p>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Todoアプリケーション</a>
        </div>

        <div class="d-flex">
          <a href="/.auth/me" class="btn btn-secondary" role="button">Profile</a>
          <a href="/.auth/login/aad" class="btn btn-secondary" role="button">Login</a>
          <a href="/.auth/logout/aad" class="btn btn-secondary" role="button">Logout</a>
        </div>
      </nav>
      <div className="container">

        <TodoProvider>
          <Todo />
          <hr />
          <Todos />
        </TodoProvider>

      </div>
    </div>
  );
}

export default App;