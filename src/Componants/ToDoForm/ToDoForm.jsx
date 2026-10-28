import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./ToDoForm.css";
import { toast } from "react-toastify";

function ToDoForm({ getData, editData, editId }) {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      toast.error("Fill the feild");
      return;
    }
    getData({ text });
    console.log(text);
    setText("");
  };

  useEffect(() => {
    if (editId !== null && editData?.title) {
      setText(editData.title);
    }
  }, [editId, editData]);

  return (
    <>
      <div className="form">
        <input
          type="text"
          id="todotext"
          name="todotext"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text..."
          className="form-input "
        />
        <Button
          label={editId ? "Update" : "Add"}
          className="add-btn"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
}
export default ToDoForm;
