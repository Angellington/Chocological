import '../styles/css/components/DateCustom.css'
import React, { useState, useEffect } from 'react'

const DateCustom = () => {
  const [date, setDate] = useState(new Date());
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
    let mes = date.getMonth() + 1;
 


    
    // console.log(hora, 'hora')


    // console.log(dia_semana_num, 'dia')

    // console.log(dia_semana[dia_semana_num], 'dia_semana')
    // let weekday = data.


  return (
    <div className="DateTime">
      <p id='p-mes'>{mes}</p>
      {/* <p id='date'>{dia}/{mes}</p>
      <p>{weekday}</p>
      <p>{hora_status}</p>
      <p>{horario} - {hora_status(date)}</p> */}


      </div>
  )
}

export default DateCustom

