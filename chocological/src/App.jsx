import { useState } from 'react';
import DateCustom from './components/DateCustom'
import MusicPlayer from './components/MusicPlayer'
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
         Entrar no site
       </button>
     </div>
    ) : (
      <div>
        <MusicPlayer/>
        <p>Teste</p>
        <DateCustom />
      </div>
    )}
      
    </>
  )
}

export default App
