export default function NoteCard({
  note,
  onDelete,
  onEdit,
}) {
  return (
    <div className="card mb-3">

      <div className="card-body">

        <h5>{note.title}</h5>

        <p>{note.description}</p>

        <div className="d-flex gap-2">

          <button
            className="btn btn-warning"
            onClick={() => onEdit(note)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() =>
              onDelete(note._id)
            }
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}