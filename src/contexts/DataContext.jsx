import { createContext, useState } from "react";

const DataContext = createContext()

function DataProvider({ children }){
    const [data, setData] = useState({
        generalInfo: {
            fullName: "John Doe",
            occupation: "Full Stack Developer",
            email: "johndoe@email.com",
            phone: "555-555-5555",
            website: "https://placekitten.com/",
        },
        workHistory: [
            {
                name: "Matrix",
                position: "Software Developer",
                start: "2020",
                end: "2050",
                responsibilities: "N/A",
            }
        ],
        education: [
            {
                name: "Zion University",
                degree: "Computer Science",
                start: "2016",
                end: "2020"
            }
        ],
    })

    const handleFieldsetChange = (fieldset, value) => {
        setData((prevData) => ({...prevData, [fieldset]: value }))
    }

    return (
        <DataContext.Provider value={{ data, setData, handleFieldsetChange }}>
            {children}
        </DataContext.Provider>
    )
}

export {
    DataContext,
    DataProvider
}