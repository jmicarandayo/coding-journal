import React from 'react'
import './components/Journal.css'
import JournalTracker from './components/JournalTracker'
import TaskTracker from './components/TaskTracker'

function Journal() {
    return (
        <div className='Journal'>
            <h1>My Coding Journal</h1>
            <div className='My-Journal'>
                <JournalTracker/>
                <TaskTracker/>
            </div>
        </div>
    )
}

export default Journal
