import { useState } from 'react';
import DateCustom from './components/DateCustom'
import MusicPlayer from './components/MusicPlayer'
import Chocolate from './components/Chocolate'
import './styles/css/App.css'



function App() {
  const [enter, setEnter] = useState(false);

  return (
    <>
    {!enter ? (
       <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
       <h1 className="text-2xl mb-4">Boas-vindas</h1>
       <button
         className="bg-white text-black px-6 py-2 rounded-xl"
         onClick={() => setEnter(true)}
       >
         Entrar
       </button>
     </div>
    ) : (
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
  <MusicPlayer />
  <div style={{ position: 'fixed', top: 0, left: 0,
    padding: '10px',
    zIndex: 10
  }}>
    <DateCustom />
  </div>
  <div style={{ width: '100%', height: '100%', display: 'flex',justifyContent: 'center', alignItems: 'center'
  }}>
    <Chocolate />
  </div>
</div>

      
    )}
      
    </>
  )
}

export default App
