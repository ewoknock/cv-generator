import React from "react";
import '../styles/Work.css'

function newWorkEntry(props){
console.log(props)
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
   const workSection = document.querySelector('.work');
   let timeStamp = props.timeStamp
   
   let workEntry = document.createElement('div')
   workEntry.classList.add('work-entry')
   workEntry.id = timeStamp

   let workInfo = document.createElement('div')
   workInfo.classList.add('work-info')

   let workDetails = document.createElement('div')
   workDetails.classList.add('work-details')

   workEntry.appendChild(workInfo)
   workEntry.appendChild(workDetails)
   workSection.appendChild(workEntry)

}

function Work(){
    return (
        <section className='work'>
            <div className='work-header'>
                <h2>Work Experience</h2>
                <button onClick={newWorkEntry} className='work-add-button'>+</button>
            </div>
        </section>
    )
}

export default Work