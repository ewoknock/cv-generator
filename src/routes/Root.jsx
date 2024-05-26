import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { DataProvider } from '../contexts/DataContext'
import Header from '../components/Header.jsx'
import '../styles/Root.css'

function Root() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <DataProvider>
        <Outlet />
      </DataProvider>
    </>
  )
}

export default Root
