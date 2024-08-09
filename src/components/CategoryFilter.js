import React,{useState} from "react";

function CategoryFilter({tasks, categories, currentTaskList, setCurrentTaskList}) {

  const [selectedCategory,setSelectedCategory] = useState("All")

  function handleButtonFilter(category){

    setSelectedCategory(category)
    const categoryFilterList = tasks.filter(task => 
      {
        if(category === "All"){
        return true
      }
      else{
        return task.category === category
      }
      
    })
    console.log(categoryFilterList)
    setCurrentTaskList(categoryFilterList)
  }

  const categoryButtons = categories.map(category => {
    return (
      <button
        key={category} 
        onClick={() => handleButtonFilter(category)}
        className = {selectedCategory === category ? "selected" : ""}
        >
        {category}
      </button>
    )

  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
