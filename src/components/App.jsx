import { useState } from 'react'
import { DataProvider } from '../contexts/DataContext'
import Form from './Form'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataProvider>
        <Form />
      </DataProvider>
    </>
  )
}

export default App
