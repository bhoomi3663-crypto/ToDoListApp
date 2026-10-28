import "./ToDoDetail.css";
import { useParams } from "react-router-dom";

function ToDoDetail() {
  let { id } = useParams();
  const user = JSON.parse(localStorage.getItem("Data"));
  console.log(user);

  const cardTitle = user.filter((item) => {
    return item.id === id;
  });
  console.log(cardTitle);
  return (
    <>
      <div>
        <p className="detail-id">TodoDetail - {id}</p>
        <h1 className="detail-title">{cardTitle[0].title}</h1>
      </div>
    </>
  );
}

export default ToDoDetail;
