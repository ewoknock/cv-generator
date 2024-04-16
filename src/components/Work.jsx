import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import DeleteButton from './DeleteButton'
import AddEntryButton from './AddEntryButton'
import '../styles/Form.css'

function Work(){

    const {
        data: { workHistory },
        handleFieldsetChange,
    } = useContext(DataContext)

    const addEntry = () => {
        handleFieldsetChange("workHistory", [
            ...workHistory,
            { name: "", position: "" , start: "", end: "", responsibilities: "" },
        ])
    }

    const removeEntry = (index) => {
        handleFieldsetChange("workHistory", [
            ...workHistory.slice(0, index),
            ...workHistory.slice(index +1 )
        ])
    }

    const handleItemChange = (e, index, name) => {
        const editedItem = { ...workHistory[index], [name]: e.target.value }
        const newWorkHistory = [
            ...workHistory.slice(0, index),
            editedItem,
            ...workHistory.slice(index + 1)
        ]
        handleFieldsetChange("workHistory", [...newWorkHistory])
    }

    return (
        <fieldset className='work'>
            <legend>Work Experience</legend>

            {workHistory.map((work, index) => {
                const key = `company${index}`

                return (
                    <section key={key} className='form'>
                        <div className='form-entry'>
                            <div className='form-info'>
                                <div className='form-group'>
                                    <label htmlFor='position' className='form-label'>Position</label>
                                    <input 
                                        type='text' 
                                        className='form-control position-name' 
                                        id='position'
                                        name='position'
                                        value={work.position}
                                        onChange={(e) => handleItemChange(e, index, "position")}
                                        placeholder='Position'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='name' className='form-label'>Company Name</label>
                                    <input 
                                        type='text'
                                        className='form-control company-name'
                                        id='name'
                                        name='name'
                                        value={work.name}
                                        onChange={(e) => handleItemChange(e, index, "name")}
                                        placeholder='Company Name'
                                    />
                                </div>
                            </div>
                            <div className='form-info'>
                                <div className='form-group'>
                                    <label htmlFor='start' className='form-label'>Start Year</label>
                                    <input 
                                        type='text' 
                                        className='form-control start' 
                                        id='start'
                                        name='start'
                                        value={work.start}
                                        onChange={(e) => handleItemChange(e, index, "start")}
                                        placeholder='Start Year'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='end' className='form-label'>End Year</label>
                                    <input 
                                        type='text'
                                        className='form-control end'
                                        id='end'
                                        name='end'
                                        value={work.end}
                                        onChange={(e) => handleItemChange(e, index, "end")}
                                        placeholder='End Year'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='form-info'>
                            <div className='form-group'>
                                <label htmlFor='responsibilities' className='form-label'>Responsibilities</label>
                                <textarea 
                                    type='textarea'
                                    className='form-control responsibilities'
                                    id='responsibilities'
                                    name='responsibilities'
                                    value={work.responsibilities}
                                    onChange={(e) => handleItemChange(e, index, "responsibilities")}
                                    placeholder='Responsibilities'
                                    rows='4'
                                />
                            </div>
                        </div>
                        <DeleteButton onClick={() => removeEntry(index)} />
                    </section>
                )
            })}
            <AddEntryButton onClick={() => addEntry()} />
        </fieldset>
    )
}

export default Work