import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

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
                {workHistory.map((entry, index) => {
                    return (<div key={`company${index}`}>
                        <p>{entry.name}</p>
                        <p>{entry.position}</p>
                        <p>{entry.start}</p>
                        <p>{entry.end}</p>
                        <p>{entry.responsibilities}</p>
                    </div>)
                })}
            </section>
            <section className="education">
                {education.map((entry, index) => {
                    return (<div key={`education${index}`}>
                        <p>{entry.name}</p>
                        <p>{entry.degree}</p>
                        <p>{entry.start}</p>
                        <p>{entry.end}</p>
                    </div>)
                })}
            </section>
        </>
    )
}

export default View