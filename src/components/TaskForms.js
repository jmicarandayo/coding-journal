import React from 'react'
import TextField from '@material-ui/core/TextField';

const TaskForms = ({date, handleDate, task, handleTask, handleSave}) => {
    return (
        <div>
            <form className='Form-Task'>
                <div className='Form-date'>
                <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue="2017-05-24"
                            value={date} onChange={handleDate}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                </div>
                <div className='Form-thoughts'>
                    <label className='p-b'>Task for the Day</label>
                    <textarea value={task} onChange={handleTask} placeholder='Input field for task' rows='5'></textarea>
                </div>
                <div className='Form-btn'>
                    <button type='submit' className='btn btn-success' onClick={handleSave}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForms
