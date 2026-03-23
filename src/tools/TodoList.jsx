import {useState, useEffect} from 'react';
import classes from '../styles/Todo.module.css';
function TodoList(){
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    return savedTasks || [];
  });
  const [newTask, setNewTask] = useState({name:'', isCompleted:false});
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])
  function handleInputChange(e){
    setNewTask({
      name:e.target.value,
      isCompleted:false
    });
  }
  function addTask(){
    if(newTask.name.trim() !== ''){
      setTasks([...tasks, newTask]);
      setNewTask({name:'', isCompleted:false});
    }
  }
  function checkTask(index){
    setTasks(tasks.map((task, taskIndex)=> taskIndex === index ? {...task , isCompleted:!task.isCompleted} : task))
  }
  function deleteTask(index){
    setTasks(tasks.filter((task,taskIndex)=> taskIndex !== index));
  }
  function handleKeyDown(e){
    if(e.key === 'Enter'){
      addTask();
    }
  }
  return(
    <div className={classes.todo_list}>
      <h1>To-Do List</h1>
      <div className={classes.task_options}>
        <input 
        type="text" 
        placeholder='Task name'
        className={classes.task_input}
        value={newTask.name}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        />
        <button 
        className={classes.add_btn}
        onClick={addTask}
        >Add</button>
      </div>
      <div className={classes.tasks_container}>
        {
          tasks.map((task, index)=>{
            return(
              <div key={index} className={classes.task_container}>
                <p className={`${classes.task_name} ${task.isCompleted ? classes.checked : ''}`} onClick={()=>{checkTask(index)}}>{task.name}</p>
                <button 
                className={classes.delete_btn}
                onClick={()=> deleteTask(index)}
                >Delete</button>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
export default TodoList