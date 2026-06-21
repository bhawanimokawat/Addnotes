function AddFolderCard({

  onAddClick,

}) {

  return (

    <div

      className="add-folder-card"

      style={{
        cursor: "pointer",
      }}

      onClick={onAddClick}

    >

      <i className="bi bi-plus-lg fs-1"></i>

      <p className="mt-3">

        New Folder

      </p>

    </div>

  );

}

export default AddFolderCard;