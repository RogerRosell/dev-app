"use client";;

import React, { useState } from 'react';
import { TimePicker} from '@/components/ui/datetime-picker'
 

interface TimerProps {
  initialTime: number; // initial time in seconds3
  alertTime: number; // agitation alert in seconds
}

const Timer: React.FC<TimerProps> = ({ initialTime, alertTime }) => {
  const [time, setTime] = useState(initialTime);
  const [newTime, setNewtime] = useState<Date | undefined>(undefined);
  const [showTimer, setShowTimer] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setShowTimer(true)
    if (time > 0) {
      // const audio = new Audio('/sounds/xiulet.mp3');
      // audio.play();
      time < initialTime && time % alertTime === 0 && console.log('Agitate!');
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-red-900">
        {showTimer ? (
          <>
          <div className="text-[calc(100vw/4)] text-center whitespace-nowrap font-mono">
            {String(Math.floor(time / 60)).padStart(2, '0')}:
            {String(time % 60).padStart(2, '0')}
          </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <TimePicker />
            <button onClick={() => startTimer()}>Start</button>
          </div>
            )}
      </div>
    </div>
  );
};

export default Timer;