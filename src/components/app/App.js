import './App.css';
import { ThemeContext , themes } from '../../contexts/ThemeContext';

import Champion from '../champion/Champion';

function App() {
  return (

    <div className="App">
      <ThemeContext.Provider value={themes.blue}>
        <Champion championName="Ed"></Champion>
        <Champion championName="Garuk"></Champion>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;