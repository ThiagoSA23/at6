import { useState } from 'react'
import './App.css'
import List from './components/Lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div><List/></div>
  )
}

export default App