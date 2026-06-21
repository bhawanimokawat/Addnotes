function FolderCard({

  folder,

  onClick,

  onDelete,

  active,

}) {

  return (

    <div

      className={`folder-card ${active ? "border border-primary" : ""
        }`}

      onClick={onClick}

      style={{
        cursor: "pointer",
        position: "relative",
      }}

    >

      {/* DELETE ICON */}

      <i
        className="bi bi-trash3"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
          color: "red",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(folder._id);
        }}
      ></i>

      <h5>{folder.name}</h5>

    </div>

  );
}

export default FolderCard;