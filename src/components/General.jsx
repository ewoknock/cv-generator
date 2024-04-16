import React from 'react'
import '../styles/General.css'

function General(){
    return (
        <section className='general'>
            <div className='general-info'>
                <input className='form-control fullName' type='text' placeholder='Full Name' />
                <input className='form-control occupation' type='text' placeholder='Occupation' />
            </div>
        </section>
    )
}

export default General