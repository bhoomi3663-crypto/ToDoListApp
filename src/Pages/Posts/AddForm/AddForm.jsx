import { useState } from "react";
import "./AddForm.css";
import Button from "../../../Componants/Button/Button";

function AddForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form className="book-form" onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Author Name</label>
        <input
          type="text"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <Button label="Submit" />
      </form>
    </div>
  );
}

export default AddForm;
