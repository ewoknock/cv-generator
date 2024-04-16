import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import DeleteButton from './DeleteButton'
import AddEntryButton from './AddEntryButton'
import '../styles/Education.css'

    /*
        <div className='work-entry'>
            <div className='work-info'>
                <input className='form-control title' type='text' placeholder='Job Title' />
                <input className='form-control company-name' type='text' placeholder='Company Name' />
                <input className='form-control duration' type='text' placeholder='Year - Year' />
            </div>
            <div className='work-details'>
                <input className='form-control responsibilities' type='text-area' placeholder='Job Responsibilities' />
            </div>
        </div>
    */

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
        <fieldset className='education'>
            <legend>Education</legend>

            {education.map((work, index) => {
                const key = `education${index}`

                return (
                    <section key={key} className='education'>
                        <div className='education-entry'>
                            <div className='education-info'>
                                <div className='form-group'>
                                    <label htmlFor='degree' className='form-label'>Degree</label>
                                    <input 
                                        type='text' 
                                        className='form-control degree' 
                                        id='degree'
                                        name='degree'
                                        value={education.degree}
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
                                        value={education.name}
                                        onChange={(e) => handleItemChange(e, index, "name")}
                                        placeholder='School Name'
                                    />
                                </div>
                            </div>
                            <div className='education-info'>
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
                        <DeleteButton onClick={() => removeEntry(index)} />
                    </section>
                )
            })}
            <AddEntryButton onClick={() => addEntry()} />
        </fieldset>
    )
}

export default Education