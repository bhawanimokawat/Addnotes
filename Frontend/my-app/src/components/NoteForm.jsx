import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      title,
      description,
    });

    setTitle("");

    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        className="form-control mb-3"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        className="form-control mb-3"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <button className="btn btn-primary">

        Add Note

      </button>

    </form>
  );
}