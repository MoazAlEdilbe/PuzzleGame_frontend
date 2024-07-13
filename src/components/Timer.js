import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp, solved }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time === 0 || solved) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <div>Time Left: {time}s</div>;
};

export default Timer;
