import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
  splashText: string;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, splashText }) => {
  const [countdown, setCountdown] = useState(3); // Initial countdown value
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false);
      onFinish();
    }, countdown * 1000); // Countdown in seconds, multiply by 1000 to convert to milliseconds

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(countdownInterval);
        }
        return prevCountdown - 1;
      });
    }, 1000); // Update countdown every second

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [onFinish, countdown]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
      {display && (
        <div>
          <h1 style={{ fontSize: '3em' }}>{splashText}</h1>
          <p style={{ display: 'block' }}>Main site in {countdown}</p>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
