import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './StatButton.css'
import mouseClick from './assets/mouse-click.mp3';

export default function StatButton(props) {
    const theme = useContext(ThemeContext)
    const styles = { button: { backgroundColor: theme.background } }
    const clickSound = new Audio(mouseClick);

    return <button className="stat-button" onClick={() => { if(props.onPress) props.onPress(); clickSound.play(); }} style={styles.button}>
        {props.type === "minus" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z" /></svg>}
        {props.type === "plus" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>}
    </button>
}