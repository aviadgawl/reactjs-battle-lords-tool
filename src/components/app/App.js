import './App.css';
import { ThemeContext, themes } from '../../contexts/ThemeContext';

import { useState } from 'react';
import Champion from '../champion/Champion';
import ThemeButton from '../theme-button/ThemeButton';
import ChampionAdd from '../champion-add/ChampionAdd';

function App() {
  const [theme, setTheme] = useState(themes.blue);
  const [championList, setChampionList] = useState([]);

  return (
    <div className="app-grid-container app" style={{ backgroundColor: theme.secondaryBackground }}>
      
      <div className="app-theme-buttons-container" style={{ backgroundColor: theme.foreground }}>
        {Object.keys(themes).map((x, i) => <div key={i} className="app-theme-buttons">
          <ThemeButton onPress={(t) => { setTheme(t) }} theme={themes[x]} width={30} height={30}></ThemeButton>
        </div>)}
      </div>

      <ThemeContext.Provider value={theme}>
        {championList.map((x, i) => <div key={i} className={`app-champion-${i + 1}`}>
          <div className="app-champion" style={{ backgroundColor: theme.foreground }}>
            <Champion championName={x}></Champion>
          </div>
        </div>)}
        <div className="app-champion-add">
          <ChampionAdd onPress={(newChampion) => { if (championList.length < 6) setChampionList([...championList, newChampion]) }}></ChampionAdd>
        </div>
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;