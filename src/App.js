import React, {Component , useEffect, useState} from "react"; //to create class component, and also for babel to use jsx
import "./App.css"


function App(props) {
  const [tasks, setTasks] = useState(props.tasks || []);
  const [taskName, setTaskName] = useState('');

  const taskList = tasks.map((task) => (
    <ul role="list" id="myUl">
    <div className="list-items">
      <li>{task.name}</li>
    </div>
    </ul>
  ));

  const NewTask = () => {
    if (taskName.trim() !== '') {
      const newTask = {
        
        name: taskName,
      };

      setTasks([...tasks, newTask]);
      setTaskName(''); // Clear the input 
    } else {
      alert('Please enter a task name.');
    }
  };

  const ClearList = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <h1>My List</h1>
      <button onClick={ClearList}>Clear List</button>
      <ul role="list" id="myUl">
        <div className="list-items" id="newli">
          {taskList}
        </div>
      </ul>

      <div>
        <input
          type="text"
          id="newTask"
          className="input input__lg"
          placeholder="Type your text here"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={NewTask} className="btn btn__primary btn__lg">
          Add item
        </button>
      </div>
    </div>
  );
}




export default App;