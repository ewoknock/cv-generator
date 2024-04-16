import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import '../styles/General.css'
import '../styles/Form.css'

function General(){
    const {
        handleFieldsetChange,
        data: { generalInfo },
    } = useContext(DataContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        const newGeneralInfo = { ...generalInfo, [name]: value }
        handleFieldsetChange("generalInfo", newGeneralInfo)
    }

    return (
        <fieldset className='general'>
            <legend>General Information</legend>
            <div className='general-info'>
                <div className='form-group'>
                    <label htmlFor='fullName' className='form-label'>Full Name</label>
                    <input 
                        type='text' 
                        className='form-control full-name' 
                        id='fullName'
                        name='fullName'
                        value={generalInfo.fullName}
                        onChange={handleChange}
                        placeholder='Full Name'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='occupation' className='form-label'>Occupation</label>
                    <input 
                        type='text'
                        className='form-control occupation'
                        id='occupation'
                        name='occupation'
                        value={generalInfo.occupation}
                        onChange={handleChange} 
                        placeholder='Occupation'
                    />
                </div>
            </div>
            <div className='general-info'>
                <div className='form-group'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input 
                        type='email' 
                        className='form-control email' 
                        id='email'
                        name='email'
                        value={generalInfo.email}
                        onChange={handleChange}
                        placeholder='Email' 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone' className='form-label'>Phone</label>
                    <input 
                        type='tel' 
                        className='form-control phone-number' 
                        id='phone'
                        name='phone'
                        value={generalInfo.phone}
                        onChange={handleChange}
                        placeholder='Phone Number'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='website' className='form-label'>Website</label>
                    <input 
                        type='text' 
                        className='form-control website' 
                        id='website'
                        name='website'
                        value={generalInfo.website}
                        onChange={handleChange}
                        placeholder='Website' 
                    />
                </div>
            </div>
        </fieldset>
    )
}

export default General