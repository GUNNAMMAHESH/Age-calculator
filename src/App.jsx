import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgeCalculator from './AgeCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AgeCalculator />
    </div>
  )
}

export default App
