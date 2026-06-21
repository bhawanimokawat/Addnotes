function QuickNoteCard() {
  return (
    <div className="overview-card">

      <div className="d-flex align-items-center gap-2">

        <i className="bi bi-pencil-square fs-5"></i>

        <h6 className="mb-0">

          Quick Note

        </h6>

      </div>

      <textarea

        className="form-control mt-3"

        rows="4"

        placeholder="Write something..."

      />

    </div>
  );
}

export default QuickNoteCard;