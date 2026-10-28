import { useEffect, useState } from "react";
import "./AllToDo.css";
import { useContext } from "react";
import ModeContext from "../../Componants/Context/Context";

function AllToDo() {
  const [items, setItems] = useState();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const { mode } = useContext(ModeContext);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsDataLoading(true);
      });
  }, []);

  if (!isDataLoading) {
    return (
      <div>
        <h1 className="waitdata-text">Please wait some time...</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <div
          className={`${mode === "light" ? "list-container" : "list-container-light"}`}
        >
          <h1 className="list-text">List of ToDos</h1>
          <div className="list-line"></div>
          {items.todos.map((item) => (
            <div
              className={`${mode === "light" ? "todo-list" : "todo-list-light"}`}
              key={item.id}
            >
              <div className="list-task-text">{item.todo}</div>
              <button
                className={`${item.completed ? "red-btn" : "yellow-btn"}`}
              >
                {item.completed ? "Completed" : "Pending"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default AllToDo;
