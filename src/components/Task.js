import React from "react";

function Task({taskObj, onDelete}) {
  return (
    <div className="task">
      <div className="label">{taskObj.category}</div>
      <div className="text">{taskObj.text}</div>
      <button className="delete" onClick={() => onDelete(taskObj)}>X</button>
    </div>
  );
}

export default Task;
