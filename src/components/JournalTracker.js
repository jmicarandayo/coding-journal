import React, {useState, useEffect} from 'react'
import JournalForms from './JournalForms';
import JournalList from './JournalList';


const retrieveData = localStorage.getItem('myThoughts')? JSON.parse(localStorage.getItem('myThoughts')) : [];

const JournalTracker = () => {
    const [date, setDate] = useState('');
    const [thoughts, setThoughts] = useState('');
    const [allThoughts, setAllthoughts] = useState(retrieveData);
    const [check, setCheck] = useState(false);
    const [id, setId] = useState(Date.now);
 
    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const handleThoughts = (e) => {
        setThoughts(e.target.value);
    }

    const checked = (e) => {
  
    }
    const handleSave = (e) => {
        e.preventDefault();
        if(date !== '' && thoughts !== ''){
            const journal = {date, thoughts, id};
            setAllthoughts([...allThoughts, journal])  
            setId(Date.now) 
            setDate('')       
            setThoughts('')
        } else {
            alert('Must put the date and your thoughts.')
        }
    }
    const handleDelete = () => {
        setAllthoughts([]);
    }
    const handleRemove = (e) => {
  
        let num = parseInt(e.target.id);
        console.log(num)
        const remove = [...allThoughts].filter(function(item) {
       
            console.log(item.id,num)
            return item.id !== num;
        })
        console.log(remove)
        setAllthoughts(remove);
    }
    useEffect(() => {
        localStorage.setItem('myThoughts', JSON.stringify(allThoughts))
    }, [allThoughts]);
    return (
        <>
        <div className = 'Journal-side'>
            <JournalForms
            date = {date}
            thoughts = {thoughts}
            handleDate = {handleDate}
            handleSave = {handleSave}
            handleThoughts = {handleThoughts}/>
           <div className='Thoughts'>
                <h3>Thoughts for the Day</h3>
                    <JournalList
                    allThoughts = {allThoughts}
                    handleRemove={handleRemove}
                    handleDelete={handleDelete}
                    checked = {checked}/>
           </div>
        </div>
        </>
    )
}

export default JournalTracker
