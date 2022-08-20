import React from "react";

function CreateArea(props) {

    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const newValue = event.target.value;
        const inputChange = event.target.name;

        setNote((prevValue) => {
            if (inputChange === "title") {
                return {
                    title: newValue,
                    content: prevValue.content
                }
            } else if (inputChange === "content") {
                return {
                    title: prevValue.title,
                    content: newValue
                }
            }
        })
    }

    function submitNote(event) {
        props.addNote(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div>
        <form>
            <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
            <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
            <button onClick={submitNote}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;