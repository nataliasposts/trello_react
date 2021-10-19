import React, {useState, memo} from "react";
import styled from "styled-components";



const StyledModalWindow = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin:auto;
padding: 30px;
background-color: lightgray;
border-radius: 4px;

.modal-title{
    margin-bottom: 20px;
}

.modal-description{
    margin-bottom: 20px;
}

.modal-title_input{
    width: 100%;
    padding: 8px;
    margin-top: 10px;
}

.modal-description_textarea{
    width: 100%;
    height: 100px;
    resize: none;
    padding: 8px;
    margin-top: 10px;
}

.button-modal{
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
}

.btn{
    width: 40%;
    background-color: lightslategrey;
    border-radius: 4px;
    padding: 8px;
    border: none;
    color: #fff;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer;
}
.modal-title_label{
    font-size: 16px;
    margin-bottom: 5px;
}

.modal-description_label{
    font-size: 16px;
    margin-bottom: 5px;
}
`

const CreatModalWindow = (props)=>{
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription ] = useState('');
    
    
   
   
    return (
        <StyledModalWindow>
            <div className={"modal-title"}>
                <label className={"modal-title_label"}>Title:</label>
                <input onChange={(event)=>{setNewTaskName(event.target.value)}} value={newTaskName} className={"modal-title_input"}/>
            </div>
            <div className={"modal-description"}>
                <label className={"modal-description_label"}>Description:</label>
                <textarea onChange={(event) => {setNewTaskDescription(event.target.value) }} value={newTaskDescription} type="text" className={"modal-description_textarea"}/>
            </div>
            <div className={"button-modal"}>
                <button onClick={() => {props.addTask(newTaskName, newTaskDescription, props.newTaskState, props.index); props.setModalContent(false)}} className={"btn-add_modal btn"}>Add</button>
                <button className={"btn-close-modal btn"} onClick={() => {props.setModalContent(false)}}>Cancel</button>
            </div>
        </StyledModalWindow>
    )
}

export default memo(CreatModalWindow);