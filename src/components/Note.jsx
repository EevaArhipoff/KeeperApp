import React from "react";
import Icon from "./Icon";
import Content from "./Content";
import Subject from "./Subject";
import NoteDate from "./Date";

function Note(props) {

    function deleteClick() {
        props.onDelete(props.id);
    }
    
    return (
    <div className = "note"> 
        <NoteDate date = {props.date} />
        <Icon img={props.urgency} />
        <Subject subject = {props.subject} /> 
        <Content note = {props.note} /> 
        
        <button id="deleteButton" onClick={deleteClick}>Delete</button>
    </div>
    );
}

export default Note;