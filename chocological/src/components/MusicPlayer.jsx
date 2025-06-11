import { useEffect, useRef} from 'react'

const MusicPlayer = () => {
    const audioRef = useRef(null);

    


    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = 0.2

        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.catch((e) => {
                console.log("Autoplay bloqueado pelo navegador", e)
            })
        }
    }, [])

  return (
    <audio ref={audioRef} src="/music/Beneath.mp3" preload="auto" loop />
  )
}

export default MusicPlayer