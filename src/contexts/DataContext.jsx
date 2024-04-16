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
        workHistory: [],
        education: [],
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