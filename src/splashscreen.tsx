// SplashScreen.tsx
import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
    onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCount) => prevCount - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(timer);
            onFinish(); // Finish the splash screen
        }

        return () => clearInterval(timer);
    }, [countdown, onFinish]);

    return (
        <div>
            <h1>Main site in {countdown} seconds</h1>
            <h2>Raiskale.com</h2>
            {/* You can add any other content here */}
        </div>
    );
};

export default SplashScreen;
