import React, { useContext, useEffect, useState } from "react";
import Card from "components/card";
import { ModalContext } from 'HOC/GlobalModalProvider';
import CreatModalWindow from "components/CreatModalWindow";
import styled from "styled-components";
import { TASK_STATUS } from "../../constants/taskStatus";




const StyledCardHolder = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: flex-start;

.cardHolder{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 304px;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 50px;
  margin-right: 40px;
  border-top: 1px solid rgba(128, 128, 128, 0.562);
  border-left: 1px solid rgba(128, 128, 128, 0.562);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  background-color: rgba(128, 128, 128, 0.562);
}

.btn-add_task{
  width: 100%;
  padding: 8px;
  background-color: #FFFFFF;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
}



.cardHolder-title{
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 24px;
  color: black;
}
`

const CardHolder = (props)=>{
  const [taskList, setTaskList] = useState ([]);  
  const setModalContent = useContext(ModalContext);


useEffect(()=>{ 
  new Promise((resolve, reject)=>{
    resolve([{
      title: "task 0", 
      description: "task decription",
      state: TASK_STATUS.todo,
      index: 0
    }, 
      {
        title: "task 1", 
        description: "task decription",
        state: TASK_STATUS.progress,
        index: 1
      }])
  }).then((data) => {
    setTaskList(data);
  })
}, []);


const addTask = (newTaskName, newTaskDescription, state, index) => {
  let newTaskList = [...taskList];
  newTaskList.push({ title: newTaskName, description: newTaskDescription, state: state, index:index });  
  setTaskList(newTaskList);
}


const removeTask = (index) =>{
  let newTaskList = [...taskList];
  newTaskList.splice(index, 1);
  setTaskList(newTaskList);
};

const changeName = (changeTaskName, changeTaskDescription, index) => {
  let newTaskList = [...taskList];
  newTaskList.find(card => card.index === index).title = changeTaskName;
  newTaskList.find(card => card.index === index).description = changeTaskDescription;
  setTaskList(newTaskList);
}


return( 
  <StyledCardHolder>
    <div className={"cardHolder"}>
      <div className={"cardHolder-title"}>
        <h2>To do</h2>
        </div>
        {taskList.map((task, index)=>{
          if(task.state === TASK_STATUS.todo){
            return(
            <div key={task.title}>
              <Card title={task.title} description={task.description} index={task.index} state={task.state} newTaskState={TASK_STATUS.todo} addTask={addTask} setModalContent={setModalContent} changeName={changeName} removeTask={removeTask}/>
            </div>
        )
      }
})}
   <button onClick={()=>{setModalContent(<CreatModalWindow newTaskState={TASK_STATUS.todo} addTask={addTask} setModalContent={setModalContent}/>)}}className={"btn-add_task"}>add task</button>
   </div>
   
   
   <div className={"cardHolder"}>
     <div className={"cardHolder-title"}>
       <h2>In progress</h2>
     </div>
     {taskList.map((task, index)=>{
       if(task.state === TASK_STATUS.progress){
         return(
            <div key={task.title}>
              <Card title={task.title} description={task.description} index={index} state={task.state} addTask={addTask} newTaskState={TASK_STATUS.progress} setModalContent={setModalContent} changeName={changeName} removeTask={removeTask}/>
            </div>
          )
        }
  })}
      <button onClick={()=>{setModalContent(<CreatModalWindow newTaskState={TASK_STATUS.progress} addTask={addTask} setModalContent={setModalContent}/>)}}className={"btn-add_task"}>add task</button>
      </div>
      
      
      <div className={"cardHolder"}>
        <div className={"cardHolder-title"}>
          <h2>Done</h2>
        </div>
        {taskList.map((task, index)=>{
          if(task.state === TASK_STATUS.done){
            return(
            <div key={task.title}>
            <Card title={task.title} description={task.description} index={index} state={task.state} newTaskState={TASK_STATUS.done} addTask={addTask} setModalContent={setModalContent} changeName={changeName} removeTask={removeTask}/>
            </div>
        )
      }
})}
    <button onClick={()=>{setModalContent(<CreatModalWindow newTaskState={TASK_STATUS.done} addTask={addTask} setModalContent={setModalContent}/>)}}className={"btn-add_task"}>add task</button>
    </div>
    </StyledCardHolder>
)
}


export default CardHolder;





