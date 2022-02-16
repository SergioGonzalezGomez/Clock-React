import React, { useState, useEffect } from "react";
import './Countdown.css' 
const Countdown = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
        let countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24))  / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
            
            if (distance < 0){
                clearInterval(x);
                setTime("Countdown FINISHED");
            }
        
        }, 1000);
    }, []);

  return <div className="countdown">
      <h2 className="countdown__h2">{time}</h2>
      <p>HASTA QUE TERMINE EL AÑO 2022</p>
  </div>;
};

export default Countdown;
