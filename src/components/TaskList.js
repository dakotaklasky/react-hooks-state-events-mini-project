import React from "react";
import Task from "./Task"

function TaskList({currentTaskList, setCurrentTaskList}) {

  function handleDelete(taskObj){
    const filteredTaskList = currentTaskList.filter(task => task.text !== taskObj.text)
    setCurrentTaskList(filteredTaskList)  
  }

  const taskArray = currentTaskList.map(task =>
    {
    return <Task key={task.text} taskObj={task} onDelete={handleDelete} />
  })

  return (
    <div className="tasks">
      {taskArray}
    </div>
  );
}

export default TaskList;
