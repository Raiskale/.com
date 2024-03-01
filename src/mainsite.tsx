import React from 'react';

interface MainSiteProps {
  mainHeaderText: string;
}

const MainSite: React.FC<MainSiteProps> = ({ mainHeaderText }) => {
  return (
    <div style={{ position: 'absolute', top: '10px', left: '40px' }}>
      <h1>{mainHeaderText}</h1>
      <p>Welcome to see my special website!</p>
    </div>
  );
};

export default MainSite;
