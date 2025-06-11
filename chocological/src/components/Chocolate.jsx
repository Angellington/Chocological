import { useState } from 'react'
import '../styles/css/components/Chocolate.css'



const Chocolate = () => {
    const [eat, setEat] = useState(1);

    const handleClick = () => {
        const valueEat = eat + 1;
        setEat(valueEat);
        // alert(valueEat);
    }

  return (
    <>
        <div className='chocolate' onClick={handleClick}><img src={`/Chocolate/${eat}.png`} alt="" /></div>
    </>
  )
}

export default Chocolate