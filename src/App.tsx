import React, { useState } from 'react';
import SplashScreen from './splashscreen';
import MainSite from './mainsite';
import './App.css';

function App() {
  const [showMainSite, setShowMainSite] = useState(false);

  const handleSplashFinish = () => {
    setShowMainSite(true);
  };

  return (
    <div className="App">
      {!showMainSite && <SplashScreen onFinish={handleSplashFinish} splashText="Raiskale.com" />}
      {showMainSite && <MainSite mainHeaderText="Raiskale.com" />}
    </div>
  );
}

export default App;
