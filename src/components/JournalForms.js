import React from 'react'
import TextField from '@material-ui/core/TextField';

const JournalForms = ({date, handleDate, thoughts, handleThoughts, handleSave}) => {
    return (
        <div>
            <form className='Form-Journal'>
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
                    <label className='p-b'>Thoughts for the Day</label>
                    <textarea value={thoughts} onChange={handleThoughts} placeholder='Input field for thoughts' rows='5'></textarea>
                </div>
                <div className='Form-btn'>
                    <button type='submit' className='btn btn-success' onClick={handleSave}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default JournalForms
