import './App.css';
import { ThemeContext, themes } from '../../contexts/ThemeContext';

import { useState } from 'react';
import Champion from '../champion/Champion';
import ThemeButton from '../theme-button/ThemeButton';

function App() {
  const [theme, setTheme] = useState(themes.blue);

  return (
    <div className="app-grid-container" style={{ backgroundColor: theme.secondaryBackground , transition: 'all 0.8s' }}>
      <div className="app-grid-theme-buttons">
        <div style={{ display: 'inline-block' }}>
          <ThemeButton onPress={(t) => { setTheme(t) }} theme={themes.blue} width={30} height={30}></ThemeButton>
        </div>
        <div style={{ display: 'inline-block' }}>
          <ThemeButton onPress={(t) => { setTheme(t) }} theme={themes.green} width={30} height={30}></ThemeButton>
        </div>
      </div>
      <ThemeContext.Provider value={theme}>
        <div className="app-champion-one">
          <Champion championName="Ed"></Champion>
        </div>
        <div className="app-champion-two">
          <Champion championName="Garuk"></Champion>
        </div>
        <div className="app-champion-three">
          <Champion championName="Helen"></Champion>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;