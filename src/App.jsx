import "./App.css";
import Header from "./components/Header";
import Insert from "./components/Insert";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Insert />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
