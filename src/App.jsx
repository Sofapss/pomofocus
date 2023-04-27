import { Pomodoro } from './components';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState('red');
  const colorDict = {
    red: 'rgb(193, 92, 92)',
    green: 'rgb(56, 133, 138)',
    blue: 'rgb(57, 112, 151)'
  };

  return (
    <div className="wrapper" style={{ backgroundColor: colorDict[bgColor] }}>
      <Pomodoro setBgColor={setBgColor} />
    </div>
  );
};

export default App;
