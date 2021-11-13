import './App.css';
import { ThemeContext, themes } from '../../contexts/ThemeContext';

import { useState } from 'react';
import Champion from '../champion/Champion';
import ThemeButton from '../theme-button/ThemeButton';
import ChampionAdd from '../champion-add/ChampionAdd';

function App() {
  const [theme, setTheme] = useState(themes.blue);

  return (
    <div className="app-grid-container app" style={{ backgroundColor: theme.secondaryBackground }}>
      <div className="app-theme-buttons-container">
        {Object.keys(themes).map(x => <div className="app-theme-buttons">
          <ThemeButton onPress={(t) => { setTheme(t) }} theme={themes[x]} width={30} height={30}></ThemeButton>
        </div>)}
      </div>
      <ThemeContext.Provider value={theme}>
        <div className="app-champion-one">
          <div className="app-champion" style={{ backgroundColor: theme.foreground }}>
            <Champion championName="Ed"></Champion>
          </div>
        </div>
        <div className="app-champion-two">
          <div className="app-champion" style={{ backgroundColor: theme.foreground }}>
            <Champion championName="Garuk"></Champion>
          </div>
        </div>
        <div className="app-champion-three">
          <div className="app-champion" style={{ backgroundColor: theme.foreground }}>
            <Champion championName="Helen"></Champion>
          </div>
        </div>
        <div className="app-champion-add">
          <ChampionAdd></ChampionAdd>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;