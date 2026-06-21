import { useState, useEffect } from "react";
import FolderCard from "./FolderCard.jsx";
import AddFolderCard from "./AddFolderCard";
//import { folders } from "../../data/folders";
import SectionHeader from "../common/SectionHeader";
import API from "../../services/api";


function FolderSection({ selectedFolder, setSelectedFolder,

}) {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [folderName, setFolderName] = useState("");


  // adding the function  of add new folder form ui
  const createFolder = async () => {
    try {
      const res =
        await API.post(

          "/folders",

          {

            name: folderName,

          }

        );

      setFolders(

        (prev) => [

          ...prev,

          res.data,

        ]

      );

      setFolderName("");

      setShowModal(false);

    } catch (err) {

      console.log(err);

    }

  };

  // delete function for folder
  const deleteFolder = async (id) => {

    try {

      await API.delete(`/folders/${id}` );

      setFolders((prev) =>
        prev.filter((f) => f._id !== id)
      );

    } catch (err) {

      console.log(err);

    }

  };



  // this is the logic of fet data from backend
  const fetchFolders = async () => {

    try {

      const res = await API.get(
        "/folders"
      );

      setFolders(
        res.data
      );

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };
  useEffect(() => {

    fetchFolders();

  }, []);


  return (
    <>
      <SectionHeader title="Recent Folders" />

      <div className="row g-4">

        {showModal && (

          <div
            className="modal d-block"
          >

            <div className="modal-dialog">

              <div className="modal-content">

                <div className="modal-header">

                  <h5>

                    Create Folder

                  </h5>

                  <button

                    className="btn-close"

                    onClick={() =>

                      setShowModal(false)

                    }

                  />

                </div>

                <div className="modal-body">

                  <input

                    className="form-control"

                    placeholder="Folder Name"

                    value={folderName}

                    onChange={(e) =>

                      setFolderName(

                        e.target.value

                      )

                    }

                  />

                </div>

                <div className="modal-footer">

                  <button

                    className="btn btn-secondary"

                    onClick={() =>

                      setShowModal(false)

                    }

                  >

                    Cancel

                  </button>

                  <button

                    className="btn btn-primary"

                    onClick={createFolder}

                  >

                    Save

                  </button>

                </div>

              </div>

            </div>

          </div>

        )}






        {loading ? (

          <p>Loading folders...</p>

        ) : folders.length === 0 ? (

          <p>No folders found</p>

        ) : (

          folders.map((folder) => (

            <div

              className="col-md-3"

              key={folder._id}

            >

              <FolderCard

                folder={folder}

                active={selectedFolder === folder._id}

                onClick={() =>
                  setSelectedFolder(folder._id)
                }

                onDelete={deleteFolder}

              />

            </div>

          ))

        )}

        <div className="col-md-3">

          <AddFolderCard

            onAddClick={() =>

              setShowModal(true)

            }

          />

        </div>

      </div>
    </>
  );
}

export default FolderSection;