import "./ToDo.scss";
import { Link } from "react-router-dom";
import { useTodos } from "../TodosContext.jsx";

function Todo({ todo }) {
  const store = useTodos();
  return (
    <>
      <Link to={"/todo/" + todo.id} style={{ textDecoration: "none" }}>
        <div className={`todo ${todo.completed ? "done" : ""}`}>
          <h3>{todo.userId}</h3>
          <p>{todo.todo}</p>
          <div className="task-check">
            <input
              type="checkbox"
              onClick={() =>
                store.dispatch({
                  type: "toggledIsDone",
                  id: todo.id,
                })
              }
              checked={todo.completed}
            />
            <label>{!todo.completed ? "To-Do" : "Done"}</label>
          </div>
          <button
            className="erase"
            onClick={() =>
              store.dispatch({
                type: "deleted",
                id: todo.id,
              })
            }
          >
            x erase
          </button>
        </div>
      </Link>
    </>
  );
}

export default Todo;
