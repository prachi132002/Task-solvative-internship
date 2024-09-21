import React from 'react'

function App() {
    const startbtn=()=>{

    }
    const stopbtn=()=>{

    }
  return (
    <div className='StopWatch'>
    <h1>StopWatch App</h1>
    <h2>StopWatch:0:00</h2>
    <div>
        <button  className ='start'onClick={startbtn}>Start</button>
        <button className='stop' onClick={stopbtn}>stop</button>
    </div>
    </div>
    
  )
}

export default App
