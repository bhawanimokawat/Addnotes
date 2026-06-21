function AddNoteCard({ onAddClick }) {
  return (
    <div
      className="add-note-card"
      style={{ cursor: "pointer" }}
      onClick={onAddClick}
    >
      <i className="bi bi-plus-lg fs-1"></i>

      <p className="mt-2">New Note</p>
    </div>
  );
}

export default AddNoteCard;