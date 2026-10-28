import "./ToDoCard.css";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

function ToDoCard({ noteTitle, deleteHandler, editHandler, taskDoneHandler }) {
  console.log(noteTitle);
  const navigate = useNavigate();
  //   const handleDeleteClose = () => {
  //     setShowDelete(true);
  //   };
  return (
    <>
      <div>
        {noteTitle.length === 0 ? (
          <h1 className="no-task">No task</h1>
        ) : (
          <div className="card-position">
            {noteTitle.map((item) => (
              <div className="card-layer" key={item.id}>
                <div
                  className={`${item.completed ? "cardDone-title" : "card-title"}`}
                >
                  <p>{item.title}</p>
                </div>
                <div className="card-icon">
                  <span
                    className="right-icon"
                    onClick={() => taskDoneHandler(item.id)}
                  >
                    <FaCheck size={20} />
                  </span>
                  <span
                    className="edit-icon"
                    onClick={() => editHandler(item.id)}
                  >
                    <FaRegEdit size={20} />
                  </span>
                  <span
                    className="delete-icon"
                    onClick={() => deleteHandler(item.id)}
                  >
                    <MdDeleteOutline size={20} />
                  </span>
                  <span
                    className="arro-icon"
                    onClick={() => {
                      navigate(`/todoDetail/${item.id}`);
                    }}
                  >
                    <FaArrowAltCircleRight size={20} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default ToDoCard;
