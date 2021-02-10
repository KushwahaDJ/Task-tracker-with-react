import { useState } from 'react'

const AddTasks = ({ onAdd }) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState ('');
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please add the text in the given input box');
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor=''>Task</label>
                <input type='text' value={text} placeholder='Add Task' onChange={ (e) => setText(e.target.value) }/>
            </div>
            <div className='form-control'>
                <label htmlFor=''>Day and Time</label>
                <input type='text' value={day} placeholder='Add Day and Time' onChange={ (e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor=''>Set Reminder</label>
                <input type='checkbox' checked={reminder} value = {reminder} placeholder='Set Reminder' onChange={ (e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input className='btn btn-block' type='submit' value='save Task'/>
        </form>
    )
}

export default AddTasks
