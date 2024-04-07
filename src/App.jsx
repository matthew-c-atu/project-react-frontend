// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Transport from './Transport.jsx'

const playerLogo = "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png" 

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={playerLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Music Player</h1>
      <HelloText />
      <Transport />
      <div>
        <audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
      </div>
    </>
  )
}

function HelloText() {
  return (
    <h1>Hello</h1> 
  )
}
