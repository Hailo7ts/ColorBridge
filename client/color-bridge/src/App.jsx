import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page from './stories/Page.jsx'
import HomePage from './pages/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <HomePage />
    </>
  )
}

export default App
