import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {

    
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (showSplashScreen) {
            const timer = setInterval(() => {
                setCountdown((prevCount) => prevCount - 1);
            }, 1000);

            if (countdown === 0) {
                clearInterval(timer);
                setShowSplashScreen(false); // Hide the splash screen after countdown
            }

            return () => clearInterval(timer);
        }
    }, [showSplashScreen, countdown]);

    return (
        <div>
            {showSplashScreen ? (
                <div className="splash-screen-container">
                    <h1 className="splash-screen-title">
                        <span className="white-text">Raiskale</span>
                        <span className="green-text">.com</span>
                        <h2 className="Countdown">Site in {countdown} seconds</h2>
                    </h1>
                </div>
            ) : (
                
                <div className="Mainsite">
                    <h1 className="MainsiteTitle">
                        <span className="white-text">Raiskale</span>
                        <span className="green-text">.com</span>
                        
                    </h1>
                    {/* Add your main site content here */}
                    <div className="relative h-full w-full bg-black">
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient"></div>
                        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-radial-gradient"></div>
                        <div className="line"></div>
                    </div>
                    <div className="container">
      <img src=".\Green.png" alt="" className="small-image" />
      {/* Other content of your component */}
    </div>
                </div>
            )}
        </div>
    );
};

export default App;
