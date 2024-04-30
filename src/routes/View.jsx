import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import "../styles/View.css"

function View(){
    const { data: { generalInfo, workHistory, education }} = useContext(DataContext)
    console.log(workHistory)
    return (
        <>
            <section className="info">
                <div className="info-left">
                    <p>{generalInfo.email}</p>
                    <p>{generalInfo.phone}</p>
                </div>
                <h2>{generalInfo.fullName}</h2>
                <div className="info-right">
                    <p>{generalInfo.website}</p>
                </div>
            </section>
            <section className="workHistory">
                <h2 className="workHistory-header">Work Experience</h2>
                {workHistory.map((entry, index) => {
                    return (<div key={`company${index}`} className="workHistory-entry">
                        <div className="company-info">
                            <p>{entry.name}</p>
                            <p>{entry.position}</p>
                            <p>{entry.start}-{entry.end}</p>
                        </div>
                        <p className="company-responsibilities">{entry.responsibilities}</p>
                    </div>)
                })}
            </section>
            <section className="education">
                <h2 className="education-header">Education</h2>
                {education.map((entry, index) => {
                    return (<div key={`education${index}`} className="education-entry">
                        <p><strong>{entry.degree}</strong>, {entry.name}</p>
                        <p>{entry.start}-{entry.end}</p>
                    </div>)
                })}
            </section>
        </>
    )
}

export default View