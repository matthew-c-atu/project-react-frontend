import './App.css'
import Transport from './Transport'

// import Transport from './Transport.jsx'

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
      <div>
        <button className="logo" onClick={GetAudioData}>
          <h4>Get audio</h4>
        </button>
        <audio id="player" src="data:audio/x-wav;base64"></audio>
      </div>
      <h1>Music Player</h1>
      <HelloText />
      <Transport />
    </>
  )
}

function HelloText() {
  return (
    <h1>Hello</h1> 
  )
}

function GetAudioData() {
 console.log("foo")
  fetch( "http://localhost:8080",
    {
      method: "GET"
    }
  ).then((response) => console.log(response))
}
