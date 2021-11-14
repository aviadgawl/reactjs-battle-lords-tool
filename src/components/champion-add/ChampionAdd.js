import './ChampionAdd.css';

import { useRef } from 'react';
import StatButton from '../stat-button/StatButton';

export default function ChampionAdd(props) {
    const championNamesList = useRef(['David', 'Shimshon', 'The Rock', 'Mor', 'Sigalit', 'Aviad']);

    const handelOnPress = () => {
        if (championNamesList.current.length === 0) return;

        const randomNumber = Math.floor(Math.random() * championNamesList.current.length);
        const selectedChampionName = championNamesList.current.splice(randomNumber, 1)
        props.onPress(selectedChampionName);
    }

    return (<div className="champion-add">
        <StatButton onPress={handelOnPress} type="plus"></StatButton>
    </div>)
}