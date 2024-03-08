import React, {useState} from "react";

function CreateNote(props) {

    let date = new Date();
    let thisDate = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

    const [note, setNote] = useState({
        subject: "",
        note: "",
        urgency: "pics/thinker.png",
        date: thisDate
    });

    function handleNote(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function saveNote(event) {
        props.onAdd(note);
        setNote({
            subject: "",
            note: "",
            date: thisDate,
            urgency: "pics/thinker.png"
        })
        event.preventDefault();
    }



    return (
        <div>
            <form action="" id="addNote">
                <input name="subject" onChange={handleNote} value={note.subject} placeholder="Subject" />
                <textarea name="note" onChange={handleNote} value={note.note} placeholder="Note"></textarea>
                <select name="urgency" onChange={handleNote} value={note.urgency}>
                    <option value="pics/thinker.png">Just to remember.</option>
                    <option value="pics/noHurry.png">ToDo.</option>
                    <option value="pics/hurry.png">Needs to be done!</option>
                    <option value="pics/timeUp.png">Should already been done!</option>
                </select>
                <button id="addButton" onClick={saveNote}>Add new note</button>
            </form>
        </div>
        );
    }

export default CreateNote;