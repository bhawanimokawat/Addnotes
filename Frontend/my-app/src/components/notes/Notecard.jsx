function NoteCard({

  note,

  onDelete,

  onEdit,

}) {
   

  return (

    <div className="note-card">

      <div className="d-flex justify-content-between">

        <i className="bi bi-pin-angle-fill"></i>

        <div>

          <i

            className="bi bi-pencil-square me-3"

            style={{
              cursor: "pointer",
            }}

            onClick={onEdit}

          ></i>

          <i

            className="bi bi-trash3"

            style={{
              cursor: "pointer",
            }}

            onClick={onDelete}

          ></i>

        </div>

      </div>

      <h5 className="mt-4">

        {note.title}

      </h5>

      <p className="mt-3">

        {note.description}

      </p>

      <small>

        {new Date(
          note.createdAt
        ).toLocaleDateString()}

      </small>

    </div>

  );

}

export default NoteCard;