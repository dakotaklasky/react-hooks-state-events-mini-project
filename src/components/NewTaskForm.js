import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})
    //console.log(event.target.value)
    //console.log(formData)
  }

  function handleSubmit(event){
    event.preventDefault()

    const newTask= {
      id: uuid,
      ...formData
    }

    onTaskFormSubmit(newTask)
  }


  const myCategories = categories.filter(category => {
    return (category !== "All")
  })

  const optionElements = myCategories.map(category => {
    return(<option key={category}>{category}</option>)
  })


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" value={formData.text} />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category" value={formData.category}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
