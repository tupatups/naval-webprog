import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>My React App</h1>
        <p>
          Name: Christopher Naval <br />
          Email: navalchristopherbago@gmail.com <br />
          Section: INF-231 <br />
        </p>
        <a href="https://github.com/tupatups/naval-webprog" target="_blank">
        Github Link
        </a>
      </div>
    
    </>
  )
}

export default App