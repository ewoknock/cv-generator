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
            <legend>
                General Information
            </legend>
            <div className='general-info'>
                <input 
                    type='text' 
                    className='form-control full-name' 
                    id='fullName'
                    name='fullName'
                    value={generalInfo.fullName}
                    onChange={handleChange}
                    placeholder='Full Name'
                />
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
            <div className='general-info'>
                <input 
                    type='email' 
                    className='form-control email' 
                    id='email'
                    name='email'
                    value={generalInfo.email}
                    onChange={handleChange}
                    placeholder='Email' 
                />
                <input 
                    type='tel' 
                    className='form-control phone-number' 
                    id='phone'
                    name='phone'
                    value={generalInfo.phone}
                    onChange={handleChange}
                    placeholder='Phone Number'
                />
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
        </fieldset>
    )
}

export default General