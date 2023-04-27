import { useEffect, useState } from 'react';
import { getPadTime } from '../../utils/index.js';
import styles from './Timer.module.css';

const Timer = ({ time }) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [isCounting, setIsCounting] = useState(false);

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  const handleStart = () => {
    if (timeLeft === 0) setTimeLeft(time);
    setIsCounting(true);
  };
  const handlePause = () => setIsCounting(false);
  const handleReset = () => {
    setTimeLeft(time);
    setIsCounting(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimeLeft(timeLeft => timeLeft > 0 ? timeLeft - 1 : 0);
    }, 1000);
    if (timeLeft === 0) setIsCounting(false);
    return () => clearInterval(interval);
  }, [timeLeft, isCounting]);

  return (
    <div className={styles.timer}>
      <h2>{minutes}:{seconds}</h2>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={isCounting ? handlePause : handleStart}>
          {isCounting ? 'Pause' : 'Start'}
        </button>
        <button className={styles.btn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;