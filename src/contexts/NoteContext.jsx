import { useContext, createContext, useState, useEffect } from "react";
import moment from "moment";
const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [
    {
      createdAt: "2022-05-25T18:14:19+03:00",
      detail: "This is a note app created with React and Context API.",
      id: "vggynySTZ-XKyqkgD9yY-",
      title: "Hello",
    },
    {
      createdAt: "2022-05-25T18:14:14+03:00",
      detail:
        "1. styled components\n2. framer-motion\n3.  ionicons\n4. nanoid\n5.moment\n",
      id: "M6QS5RkdlhHTRMRjmTMnh",
      title: "packages",
    },
    {
      createdAt: "2022-05-25T18:14:03+03:00",
      detail: "🎈🎈🎈🎈",
      id: "7w_kFQbHjlBV7k_vYeYQT",
      title: "📕🖍",
    },
  ];
  const [notes, setNotes] = useState(savedNotes);
  const [inputVisibility, setInputVisibility] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (item) => {
    setNotes((state) => [...state, item]);
    setInputVisibility(false);
  };
  const deleteNote = (item) => {
    const newList = notes.filter((note) => note.id !== item.id);
    if (window.confirm("Are you sure?")) {
      setNotes(newList);
    }
  };

  const editNote = (item, input) => {
    const others = notes.filter((note) => note.id !== item.id);
    const selected = notes.find((note) => note.id === item.id);
    selected.title = input.title;
    selected.detail = input.detail;
    selected.createdAt = moment().format();
    setNotes([selected, ...others]);
  };
  const values = {
    notes,
    setNotes,
    addNote,
    deleteNote,
    editNote,
    inputVisibility,
    setInputVisibility,
  };

  return <NoteContext.Provider value={values}>{children}</NoteContext.Provider>;
};

const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider };
