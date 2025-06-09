import '../styles/css/components/DateCustom.css'
import React, { useState, useEffect } from 'react'

const DateCustom = () => {
  const [date, setDate] = useState(new Date());
  // const [mes, setMes] = useState(date.getMonth() + 1);
  const [mes, setMes] = useState(12);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const horario = date.toLocaleTimeString('en', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Formato 24h
  });



    // Traz os dias das semana
    const weekday = (date) => {
      const dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return dias[date.getDay()];
    }

    const hora_status = (date) => {
      const day_status = ['Morning', 'Afternoon', 'Evening', 'Night'];
      let hora = date.getHours();
      let hora_status = '';

      switch (true) {
        case (hora >= 0 && hora < 6):
          hora_status = day_status[3]; // Night
          break;
        case (hora >= 6 && hora < 12):
          hora_status = day_status[0]; // Morning
          break;
        case (hora >= 12 && hora < 18):
          hora_status = day_status[1]; // Afternoon
          break;
        case (hora >= 18 && hora < 24):
          hora_status = day_status[2]; // Evening
          break;
        default:
          hora_status = 'Unknown'; 
          break;
      }
      return hora_status;
    }

    // console.log(weekday(date), 'weekday')


    let dia = date.getDay() + 1;
    
    

  return (
    <div className="DateTime">
      <div className='MonthContainer'>
        <p className={getMesId(mes)}>{mes}</p>
        <p className={`${getMesId(mes)}-stroke`}>{mes}</p>
      </div>
      <div className='BarContainer'>
        <div className='bar'></div>
        <div className='bar-stroke'></div>
      </div>
      <div className='bar'></div>
      <p id='p-dia'>{dia}</p>

      {/* <p id='date'>{dia}/{mes}</p>
      <p>{weekday}</p>
      <p>{hora_status}</p>
      <p>{horario} - {hora_status(date)}</p> */}


      </div>
  )
}

const getMesId = (mes) => {
  switch (mes) {
    case 2:
      return 'p-mes-except';
    case 7:
      return 'p-mes-except';
    case 8:
      return 'p-mes-except';
    case 9:
      return 'p-mes-except';
    case 10:
      return 'p-mes-except-decimal';
    case 11:
      return 'p-mes-except-decimal';
    case 12:
      return 'p-mes-except-decimal'
    default:
      return 'p-mes'
  }
}


export default DateCustom

