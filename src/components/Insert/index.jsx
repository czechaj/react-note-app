import { useState } from "react";

//contextApi
import { useNote } from "../../contexts/NoteContext";

//styledComponent
import Button from "../Button";

//packages
import moment from "moment";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

function Insert() {
  const initValues = { title: "", detail: "" };
  const [note, setNote] = useState(initValues);

  const { addNote, inputVisibility, setInputVisibility } = useNote();

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title !== "" && note.detail !== "") {
      addNote({
        id: nanoid(),
        title: note.title,
        detail: note.detail,
        createdAt: moment().format(),
      });
      setNote(initValues);
    } else {
      window.alert("Please fill title and detail");
    }
  };
  return (
    <div className="new">
      {inputVisibility ? (
        <motion.section
          className="input"
          animate={{ y: 10 }}
          transition={{ ease: "easeInOut", duration: 1.4 }}
        >
          <button
            onClick={() => setInputVisibility(!inputVisibility)}
            className="close"
          >
            {" "}
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>
          <form onSubmit={handleSubmit}>
            <label htmlFor="note">Add note</label>
            <input
              value={note.title}
              onChange={(e) => handleChange(e)}
              name="title"
              id="note"
              placeholder="note title"
              type="text"
            />
            <textarea
              name="detail"
              placeholder="note detail"
              value={note.detail}
              onChange={(e) => handleChange(e)}
              rows={8}
              type="text"
            />
            <Button type="submit">Add Note</Button>
          </form>
        </motion.section>
      ) : (
        <div>
          <button
            onClick={() => {
              setInputVisibility(!inputVisibility);
            }}
            className="addNote"
          >
            <ion-icon
              size={"large"}
              name="add-circle-outline"
              title="New note"
            ></ion-icon>
          </button>
        </div>
      )}
    </div>
  );
}

export default Insert;
