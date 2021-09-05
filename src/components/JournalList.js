
const JournalList = ({allThoughts,handleRemove,checked,handleDelete}) => {
    return (
        <>
            <div className='My-thoughts'>
            {allThoughts.map((exp) => (
                <div className='thought'>
                    <div>
                        <p>Date: {exp.date}</p> 
                        <i type='button' id={exp.id} onClick={handleRemove} class="fas fa-trash-alt deleteIcon btn btn-secondary"></i>
                    </div>
                    <p style={{whiteSpace:"pre-wrap"}}>{exp.thoughts}</p>
                </div>
            ))}
            <div className='delete-btn Journal-Footer'>
                <button type='button' className='btn btn-danger' onClick={handleDelete}>Delete</button>
            </div>
        </div>
        </>
    )
}

export default JournalList
