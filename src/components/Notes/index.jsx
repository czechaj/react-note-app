import Card from "./Card";
import { useNote } from "../../contexts/NoteContext";

function Notes() {
  const { notes } = useNote();
  return (
    <div className="notes">
      {notes.map((note) => (
        <Card key={note.id} note={note} />
      ))}
    </div>
  );
}

export default Notes;
