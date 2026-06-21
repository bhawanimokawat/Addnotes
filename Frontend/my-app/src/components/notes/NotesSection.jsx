import NoteCard from "./NoteCard";
import { useState, useEffect } from "react";
//import { notes } from "../../data/notes";
import AddNoteCard from "./AddNoteCard";
import SectionHeader from "../common/SectionHeader";
import API from "../../services/api";


function NotesSection({ selectedFolder, search,activeTab, }) {
  const [allNotes, setAllNotes] = useState([]);
  //const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const res = await API.get("/notes");

      console.log("API NOTES:", res.data);

      setAllNotes(res.data);
     

    } catch (err) {
      console.log("Error fetching notes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);


const today = new Date();

const filteredNotes = allNotes.filter((note) => {

  const noteDate = new Date(note.createdAt);

  const matchesFolder =

    !selectedFolder ||

    note.folder?.toString() === selectedFolder;

  const matchesSearch =

    !search ||

    note.title
      .toLowerCase()
      .includes(search.toLowerCase())

    ||

    note.description
      .toLowerCase()
      .includes(search.toLowerCase());

  let matchesTab = true;

  if (activeTab === "today") {

    matchesTab =

      noteDate.toDateString()

      ===

      today.toDateString();

  }

  if (activeTab === "week") {

    const diff =

      (today - noteDate)

      /

      (1000 * 60 * 60 * 24);

    matchesTab =

      diff >= 0 && diff <= 7;

  }

  if (activeTab === "month") {

    matchesTab =

      noteDate.getMonth()

      ===

      today.getMonth()

      &&

      noteDate.getFullYear()

      ===

      today.getFullYear();

  }

  return (

    matchesFolder &&

    matchesSearch &&

    matchesTab

  );

});

  // here is logic of add new note

  //const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddClick = () => {

    if (!selectedFolder) {

      alert(
        "Please select a folder first."
      );

      return;
    }

    setEditId(null);

    setTitle("");

    setDescription("");

    setShowModal(true);

  };
  // api 
  const createNote = async () => {
    try {
      const res = await API.post("/notes", {
        title,
        description,

        folder: selectedFolder,
      });

      // instantly update UI
      setAllNotes((prev) => [...prev, res.data]);

      // reset form
      setTitle("");
      setDescription("");
      //setShowForm(false);
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  // deletenote

  const deleteNote = async (id) => {
    try {
      await API.delete(`/notes/${id}`);

      setAllNotes((prev) =>
        prev.filter((note) => note._id !== id)
      );

    } catch (err) {

      console.log(err);

    }
  };


  //Editing the note
  const [editId, setEditId] = useState(null);


  const openEditModal = (note) => {
    setEditId(note._id);

    setTitle(note.title);

    setDescription(note.description);

    setShowModal(true);

  };

  const updateNote = async () => {
    try {
      const res = await API.put(
        `/notes/${editId}`,
        {
          title,
          description,
        }
      );

      setAllNotes((prev) =>
        prev.map((note) =>
          note._id === editId
            ? res.data
            : note
        )
      );
      setShowModal(false);

      setEditId(null);

      setTitle("");

      setDescription("");

    } catch (err) {

      console.log(err);

    }
  };

  
  
  return (
    <>

      <SectionHeader title="My Notes" />


      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
        >
          <div className="modal-dialog">

            <div className="modal-content">

              <div className="modal-header">

                <h5 className="modal-title">

                  Create Note

                </h5>

                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>

              </div>

              <div className="modal-body">

                <input
                  className="form-control mb-3"
                  placeholder="Title"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                />

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Description"
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
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
                  onClick={
                    editId
                      ? updateNote
                      : createNote
                  }
                >
                  {editId ? "Update" : "Save"}
                </button>


              </div>

            </div>

          </div>
        </div>
      )}
      <div className="row g-4">
        {loading ? (
          <p className="text-muted">Loading notes...</p>
        ) : filteredNotes.length === 0 ? (
          <p className="text-muted">
            No notes in this folder
          </p>
        ) : (
          filteredNotes.map((note) => (

            <div
              className="col-md-3"
              key={note._id}
            >

              <NoteCard

                note={note}

                onDelete={() =>
                  deleteNote(note._id)
                }

                onEdit={() =>
                  openEditModal(note)
                }

              />

            </div>

          ))
        )}

        <div className="col-md-3">
          <AddNoteCard

            onAddClick={handleAddClick}

          />


        </div>
      </div>
    </>
  );
}

export default NotesSection;