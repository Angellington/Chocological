import { useState, useRef } from 'react'
import '../styles/css/components/Chocolate.css'
import SFX from './SFX'


const Chocolate = () => {
    const [eat, setEat] = useState(1);
    const audioRef = useRef(null)

    const handleClick = () => {
        const valueEat = eat + 1;
        setEat(valueEat);
        // alert(valueEat);

        if(audioRef.current){
            audioRef.current.currentTime = 0;
            audioRef.current.volume = 1
            audioRef.current.play()
        }
    }

  return (
    <>
        <div className='chocolate' onClick={handleClick}><img src={`/Chocolate/${eat}.png`} alt="" /></div>
        <audio ref={audioRef} src="/music/chocolateEat.wav" preload='auto'></audio>
    </>
  )
}

export default Chocolate