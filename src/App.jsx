import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { toast } from 'react-hot-toast'

function App() {
  return (
    <>
      <h1>weather app</h1>
      <button onClick={() => toast.success('intigrited successfully')}>
        toast
      </button>
    </>
  )
}

export default App
