import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = React.useState([])

    function createNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        })
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((item, index) => {
                return index !== id
            }) ;
        });
    }

    return (
        <div>
        <Header />
        <CreateArea addNote={createNote}/>
        {notes.map((item, index) => {
            return <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote}/>
        })}
        <Footer />
        </div>
    );
}

export default App;