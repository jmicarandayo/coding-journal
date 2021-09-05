import React, {useState, useEffect} from 'react'
import TaskForms from './TaskForms';
import TaskList from './TaskList';


const retrieveData = localStorage.getItem('myTasks')? JSON.parse(localStorage.getItem('myTasks')) : [];

const TaskTracker = () => {
    const [date, setDate] = useState('');
    const [task, setTask] = useState('');
    const [allTask, setAllTask] =useState(retrieveData);
    const [check, setCheck] = useState(false);
    const [id, setId] = useState(Date.now);

    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const handleTask = (e) => {
        setTask(e.target.value);
    }
    const handleSave = (e) => {
        e.preventDefault();
        if(date !== '' && task !== ''){
            const myTask = {date, task, id};
            setAllTask([...allTask, myTask])
            setId(Date.now) 
            setDate('')     
            setTask('')
        } else {
            alert('Must put the date and your task.')
        }
    }
    const handleDelete = () => {
        setAllTask([]);
    }
    const handleRemove = (e) => {
  
        let num = parseInt(e.target.id);
        console.log(num)
        const remove = [...allTask].filter(function(item) {
       
            console.log(item.id,num)
            return item.id !== num;
        })
        console.log(remove)
        setAllTask(remove);
    }
    const checked = (e) => {
        setCheck(e.target.checked)
    }
    useEffect(() => {
        localStorage.setItem('myTasks', JSON.stringify(allTask))
    }, [allTask]);
    return (
        <>
        <div className = 'Task-side'>
            <TaskForms
            date = {date}
            task = {task}
            handleDate = {handleDate}
            handleSave = {handleSave}
            handleTask = {handleTask}/>
           <div className='Thoughts'>
                <h3>Task</h3>
                    <TaskList
                    allTask = {allTask}
                    handleDelete={handleDelete}
                    handleRemove={handleRemove}
                    checked = {checked}/>
           </div>
        </div>
        </>
    )
}

export default TaskTracker
