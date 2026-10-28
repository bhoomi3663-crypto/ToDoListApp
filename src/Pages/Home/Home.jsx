import { useContext, useEffect, useState } from "react";
import ToDoCard from "../../Componants/ToDoCard/ToDoCard";
import ToDoForm from "../../Componants/ToDoForm/ToDoForm";
import "./Home.css";
import ConfirmModel from "../../CommonComponent/ConfirmationModel/ConfirmModel";
import { MdOutlineDone } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ModeContext from "../../Componants/Context/Context";
const NoteData = () => {
  const tasks = localStorage.getItem("Data");
  return tasks ? JSON.parse(tasks) : [];
};

function Home() {
  const [noteTitle, setNoteTitle] = useState(NoteData);
  const [editData, setEditData] = useState({ title: "" });
  const [editId, setEditId] = useState(null);
  const { mode } = useContext(ModeContext);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  // for the updated data store in card(onclick of update):
  const getData = (title) => {
    if (editId !== null) {
      const updateData = noteTitle.map((item) => {
        return item.id == editId ? { ...item, title: title.text } : item;
      });
      setNoteTitle(updateData);
      setEditId(null);
      toast.success("Data Edited");
    }
    // store the data(onclick of add):
    else {
      const newObj = {
        id: Math.random().toString(),
        title: title.text,
        // completed: false,
      };
      setNoteTitle([...noteTitle, newObj]);
      toast.success("Task Added successfully");
    }
  };
  console.log(noteTitle);

  // delete the data from the card:
  const handleDeleteId = () => {
    const data = noteTitle.filter((user) => user.id !== deleteId);
    setNoteTitle(data);
    toast.warn("Task Deleted");
    setDeleteId(null);
    setShowDelete(false);
  };
  const deleteHandler = (id) => {
    setShowDelete(true);
    setDeleteId(id);
  };
  const handleDeleteClose = () => {
    setShowDelete(false);
  };

  // edit the data of card:
  const editHandler = (id) => {
    const edit = noteTitle.filter((user) => user.id === id);
    setEditData({ title: edit[0].title });
    setEditId(id);
  };
  console.log(editData, editId);

  // task done of card:
  const taskDoneHandler = (id) => {
    const done = noteTitle.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setNoteTitle(done);
  };

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(noteTitle));
  }, [noteTitle]);
  return (
    <>
      <div
        className={`${mode === "light" ? "home-background" : "home-background-light"}`}
      >
        <div
          className={`${mode === "light" ? "form-layer" : "form-layer-light"}`}
        >
          <div
            className={`${mode === "light" ? "home-todo-logo" : "home-todo-logo-light"}`}
          >
            <h1>My Todos</h1>
            <MdOutlineDone
              className={`${mode === "light" ? "logo-icon" : "logo-icon-light"}`}
            />
          </div>
          <ToDoForm getData={getData} editData={editData} editId={editId} />
          <ToDoCard
            noteTitle={noteTitle}
            deleteHandler={deleteHandler}
            // onClose={handleDeleteClose}
            editHandler={editHandler}
            taskDoneHandler={taskDoneHandler}
          />
        </div>
      </div>
      {showDelete && (
        <ConfirmModel
          title="Are Want To Delete the Task?"
          onClose={handleDeleteClose}
          onSuccess={handleDeleteId}
          name={"Delete"}
        />
      )}
    </>
  );
}
export default Home;
