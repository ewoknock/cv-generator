import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import DeleteButton from './DeleteButton'
import AddEntryButton from './AddEntryButton'
import '../styles/Form.css'

function Education(){

    const {
        data: { education },
        handleFieldsetChange,
    } = useContext(DataContext)

    const addEntry = () => {
        handleFieldsetChange("education", [
            ...education,
            { name: "", degree: "" , start: "", end: "" },
        ])
    }

    const removeEntry = (index) => {
        handleFieldsetChange("education", [
            ...education.slice(0, index),
            ...education.slice(index +1 )
        ])
    }

    const handleItemChange = (e, index, name) => {
        const editedItem = { ...education[index], [name]: e.target.value }
        const newEducation = [
            ...education.slice(0, index),
            editedItem,
            ...education.slice(index + 1)
        ]
        handleFieldsetChange("education", [...newEducation])
    }

    return (
        <fieldset className='education-section'>
            <legend>Education</legend>

            {education.map((edu, index) => {
                const key = `education${index}`

                return (
                    <section key={key} className='form'>
                        <div className='form-entry'>
                            <div className='form-info'>
                                <div className='form-group'>
                                    <label htmlFor='degree' className='form-label'>Degree</label>
                                    <input 
                                        type='text' 
                                        className='form-control degree' 
                                        id='degree'
                                        name='degree'
                                        value={edu.degree}
                                        onChange={(e) => handleItemChange(e, index, "degree")}
                                        placeholder='Degree'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='name' className='form-label'>School Name</label>
                                    <input 
                                        type='text'
                                        className='form-control school-name'
                                        id='name'
                                        name='name'
                                        value={edu.name}
                                        onChange={(e) => handleItemChange(e, index, "name")}
                                        placeholder='School Name'
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
                                        value={edu.start}
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
                                        value={edu.end}
                                        onChange={(e) => handleItemChange(e, index, "end")}
                                        placeholder='End Year'
                                    />
                                </div>
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

export default Education