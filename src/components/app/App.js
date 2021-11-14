import './App.css';
import { ThemeContext, themes } from '../../contexts/ThemeContext';

import { useState } from 'react';
import Champion from '../champion/Champion';
import ThemeButton from '../theme-button/ThemeButton';
import ChampionAdd from '../champion-add/ChampionAdd';
import Draggable from '../draggable/Draggable';
import DropContainer from '../drop-container/DropContainer';

function App() {
  const [theme, setTheme] = useState(themes.blue);
  const [championsPoolList, setChampionsPoolList] = useState([]);
  const [selectedChampionsList, setSelectdChampionsList] = useState([]);

  const handleDropped = (championName) => {
    if(selectedChampionsList.length >= 3) return;

    setSelectdChampionsList([...selectedChampionsList, championName]);
    const championToRemoveIndex = championsPoolList.indexOf(championName);
    championsPoolList.splice(championToRemoveIndex , 1)
    setChampionsPoolList([...championsPoolList]);
  }

  return (
    <div className="app-grid-container app" style={{ backgroundColor: theme.secondaryBackground }}>

      <div className="app-theme-buttons-container" style={{ backgroundColor: theme.foreground }}>
        {Object.keys(themes).map((x, i) => <div key={i} className="app-theme-buttons">
          <ThemeButton onPress={(t) => { setTheme(t) }} theme={themes[x]} width={30} height={30}></ThemeButton>
        </div>)}
      </div>

      <ThemeContext.Provider value={theme}>
        {championsPoolList.map((x, i) => <div key={i} className={`app-champion-${i + 1}`}>
          <Draggable dragId={x}>
            <div className="app-champion" style={{ backgroundColor: theme.foreground }}>
              <Champion championName={x}></Champion>
            </div>
          </Draggable>
        </div>)}
        <div className="app-champion-add">
          <ChampionAdd onPress={(newChampion) => { if (championsPoolList.length < 3) setChampionsPoolList([...championsPoolList, newChampion]) }}></ChampionAdd>
        </div>

        <div className="app-champion-container">
          <DropContainer dropped={handleDropped}>
            {selectedChampionsList.map((x, i) =>
              <div key={i} className="app-champion app-selected-champion" style={{ backgroundColor: theme.secondaryForeground }}>
                <Champion championName={x}></Champion>
              </div>
            )}
          </DropContainer>
        </div>

      </ThemeContext.Provider>

    </div>
  );
}

export default App;