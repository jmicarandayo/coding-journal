import React from 'react'

const TaskList = ({allTask, handleRemove, handleDelete}) => {
    return (
        <>
            <div className='My-thoughts'>
            {allTask.map((exp) => (
                <div className='thought'>
                <div>
                    <p>Date: {exp.date}</p> 
                    <i type='button' id={exp.id} onClick={handleRemove} class="fas fa-trash-alt deleteIcon btn btn-secondary"></i>
                </div>
                <p style={{whiteSpace:"pre-wrap"}}>{exp.task}</p>
            </div>
            ))
            }
            <div className='delete-btn Task-Footer'>
                <button type='button' className='btn btn-danger ' onClick={handleDelete}>Delete</button>
            </div>
        </div>
        </>
    )
}

export default TaskList
