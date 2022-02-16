import React, { useEffect, useState } from "react";
import './DigitalClock.css'
const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
            
        }, 1000);
    }, []);


    return (
        <div className="digital-clock">
            <h3 className="digital-clock__h3">DIGITAL CLOCK</h3>
            <h2 className="digital-clock__h2">{clockState}</h2>
        </div>
    );
};

export default DigitalClock;
