import { useState } from 'react'
import General from './components/General.jsx'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <General />
      </div>
    </>
  )
}

export default App
