import { useState, useRef } from 'react'
import '../styles/css/components/Chocolate.css'
import SFX from './SFX'


const Chocolate = () => {
    const [eat, setEat] = useState(1);
    const [explosion, setExplosion] = useState(false)
    const [showExplosion, setShowExplosion] = useState(false)
    const [showShoko, setShowShoko] = useState(false)
    const audioRef = useRef(null)
    const bonusRef = useRef(null)

    const handleClick = () => {
        const valueEat = eat + 1;
        setEat(valueEat);
        // alert(valueEat);

        if(audioRef.current){
            audioRef.current.currentTime = 0;
            audioRef.current.volume = 1
            audioRef.current.play()
        }

        console.log(eat)

        if(eat === 13){
          setExplosion (true);
          setShowExplosion(true);

          if(bonusRef.current){
            bonusRef.current.currentTime = 0;
            bonusRef.current.volume = 1
            bonusRef.current.play();
          }

          setTimeout(() => {
            setShowExplosion(false)
            setShowShoko(true);

          }, 175)

        }
    }

  return (
    <>
        <div className='chocolate' onClick={handleClick}><img src={`/Chocolate/${eat}.png`} alt="" /></div>

        {explosion && showExplosion ? 
        <div className='explosion'><img src={`/background/explosion.gif`} alt=""/></div>
        : null}
        {showShoko ? 
          <div className='shokoDrawn'><img src={`/image/Shoko.png`} alt=""/>  <p className="shokoName">Shoko</p></div> 
          : null
      }

        <audio ref={audioRef} src="/music/chocolateEat.wav" preload='auto'></audio>
        <audio ref={bonusRef} src="/music/bonus.wav" preload='auto'></audio>
    </>
  )
}

export default Chocolate