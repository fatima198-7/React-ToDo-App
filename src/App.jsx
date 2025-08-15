import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyList from './components/myList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MyList/>
      </div>
    </>
  )
}

export default App
