import React, { useEffect, useState } from 'react'

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timerID = setInterval(
            () => setDate(new Date()),
            1000
        );
        
        return () => clearInterval(timerID);
    });

    return (
        <div >
          <h1>Привет, мир!</h1>
          <h2>Сейчас {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Clock;