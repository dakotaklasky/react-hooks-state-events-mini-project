import React from "react";
import Task from "./Task"

function TaskList({tasks, setCurrentTaskList}) {

  function handleDelete(text){
    const filteredTaskList = tasks.filter(task => task.text !== text)
    setCurrentTaskList(filteredTaskList)  
  }

  let taskArray

  if(tasks !== undefined){
    taskArray = tasks.map(task =>
      {
      return <Task key={task.text} text={task.text} category={task.category} onDelete={handleDelete} />
    })
  }
  else{
    taskArray = []
  }

  return (
    <div className="tasks">
      {taskArray}
    </div>
  );
}

export default TaskList;
