import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import useWindowSize from './helpers/useWindowSize'

import R3FCanvas from './canvas/canvas';
import UI from './ui/ui';

function App() {
  const size = useWindowSize();
  const [isMobile, setMobile] = useState(false);
  const mobileWidth = 768;
  const navWidth = 200;

  useEffect(() => {
    console.log('size', size);
    if( size.width > mobileWidth ) {
      setMobile(false);
    }
    else {
      setMobile(true);
    }
  },[size])


  return (
    <>
      <div className='container'>
        <UI isMobile={isMobile} />
      </div>
      {/* <div className='canvas-parent' style={{ left: isMobile ? 0 : navWidth}}> */}
      <div className='canvas-parent'>
        <R3FCanvas isMobile={isMobile} navWidth={navWidth} />
       
      </div>


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
