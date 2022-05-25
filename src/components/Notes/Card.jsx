import { motion } from "framer-motion";
import { useState } from "react";
import { useNote } from "../../contexts/NoteContext";
import Button from "../Button";

function Card({ note }) {
  const [noteEditable, setNoteEditable] = useState(false);
  const [newNote, setNewNote] = useState({
    title: note.title,
    detail: note.detail,
  });
  const { deleteNote, editNote } = useNote();

  const handleSubmit = (e, note, newNote) => {
    e.preventDefault();
    editNote(note, newNote);
    setNoteEditable(false);
  };
  const handleChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  return (
    <motion.div className="card" animate={{ y: 20 }}>
      <div className="card-header">
        <h3>{note.title}</h3>
        <small>{note.createdAt.slice(0, note.createdAt.indexOf("+"))}</small>
      </div>
      <div className="actions">
        <button
          onClick={() => {
            deleteNote(note);
          }}
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
        {noteEditable ? (
          <button
            onClick={() => {
              setNoteEditable(!noteEditable);
            }}
          >
            <ion-icon name="close-circle-outline"> </ion-icon>
          </button>
        ) : (
          <button
            onClick={() => {
              setNoteEditable(!noteEditable);
            }}
          >
            <ion-icon name="create-outline"></ion-icon>
          </button>
        )}
      </div>
      <div className="card-content">
        {noteEditable ? (
          <form onSubmit={(e) => handleSubmit(e, note, newNote)}>
            <input
              name="title"
              defaultValue={newNote.title}
              onChange={(e) => handleChange(e)}
              type="text"
            />
            <textarea
              rows={5}
              name="detail"
              defaultValue={newNote.detail}
              onChange={(e) => handleChange(e)}
            ></textarea>
            <Button>Edit</Button>
          </form>
        ) : (
          <p> {note.detail} </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
