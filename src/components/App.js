import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log({ CATEGORIES, TASKS });

function App() {
  const [currentTaskList, setCurrentTaskList] = useState(TASKS)

  function onTaskFormSubmit(newTask){
    setCurrentTaskList([...TASKS,newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter tasks= {TASKS} categories={CATEGORIES} currentTaskList= {currentTaskList} setCurrentTaskList={setCurrentTaskList} />
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList currentTaskList= {currentTaskList} setCurrentTaskList={setCurrentTaskList}/>
    </div>
  );
}

export default App;
