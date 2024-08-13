import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [currentTaskList, setCurrentTaskList] = useState(TASKS)
  const [selectedCategory,setSelectedCategory] = useState("All")

  function onTaskFormSubmit(newTask){
    setCurrentTaskList([...TASKS,newTask])
  }

  const categoryFilterList = currentTaskList.filter(task => 
      {
        if(selectedCategory === "All"){
        return true
      }
      else{
        return task.category === selectedCategory
      }
    })
  
  console.log(categoryFilterList)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks= {categoryFilterList} setCurrentTaskList={setCurrentTaskList}/>
    </div>
  );
}

export default App;
