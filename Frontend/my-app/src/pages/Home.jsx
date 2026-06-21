import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NotesCard";
import API from "../services/api";

export default function Home() {
    const [editingNote, setEditingNote] =
        useState(null);


    const editNote = async (note) => {
        try {

            const title = prompt(
                "Title",
                note.title
            );

            const description = prompt(
                "Description",
                note.description
            );

            if (!title || !description) {
                return;
            }

            await API.put(
                `/notes/${note._id}`,
                {
                    title,
                    description,
                }
            );

            fetchNotes();

        } catch (error) {

            console.log(error);

        }
    };
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const res = await API.get(
                "/notes"
            );

            setNotes(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    const addNote = async (note) => {
        try {
            await API.post(
                "/notes",
                note
            );

            fetchNotes();

        } catch (error) {
            console.log(error);
        }
    };

    const deleteNote = async (id) => {
        try {
            await API.delete(
                `/notes/${id}`
            );

            fetchNotes();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>

            <Navbar />

            <div className="container mt-5">

                <h2>My Notes</h2>

                <NoteForm onAdd={addNote} />

                <hr />

                {notes.map((note) => (

                    <NoteCard
                        key={note._id}
                        note={note}
                        onDelete={deleteNote}
                        onEdit={editNote}
                    />

                ))}

            </div>

        </div>
    );
}