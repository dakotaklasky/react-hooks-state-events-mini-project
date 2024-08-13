import React,{useState} from "react";

function CategoryFilter({categories,selectedCategory, setSelectedCategory}) {

  function handleButtonFilter(event){
    console.log(event.target.value)
    setSelectedCategory(event.target.value)
  }

  const categoryButtons = categories.map(category => {
    return (
      <button
        key={category} 
        onClick={handleButtonFilter}
        className = {selectedCategory === category ? "selected" : ""}
        value = {category}
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
