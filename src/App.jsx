import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [whiskies, setWhiskies] = useState([])

  useEffect(() => {
    fetch('http://somespringthing-env-2.eba-czr22d3f.us-east-1.elasticbeanstalk.com/whiskies')
      .then(res => res.json())
      .then(data => setWhiskies(data))
  }, [])


  return (
    <>
      <pre>
        {JSON.stringify(whiskies, null, 2)}
      </pre>
    </>
  )
}

export default App
