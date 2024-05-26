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
                name: "Google",
                position: "Software Developer",
                start: "2020",
                end: "",
                responsibilities: "N/A",
            }
        ],
        education: [
            {
                name: "UCI",
                degree: "B.S. in Computer Science",
                start: "2010",
                end: "2013"
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