import './ChampionAdd.css';

import { useRef } from 'react';
import StatButton from '../stat-button/StatButton';

export default function ChampionAdd(props) {
    const championNamesList = useRef(['David', 'Mor', 'Aviad', 'Adi', 'Arik', 'Shlomo']);

    const handelOnPress = () => {
        if (championNamesList.current.length === 0) return;

        const randomNumber = Math.floor(Math.random() * championNamesList.current.length);
        const selectedChampionName = championNamesList.current.splice(randomNumber, 1)
        props.onPress(selectedChampionName[0]);
    }

    return (<div className="champion-add">
        <StatButton onPress={handelOnPress} type="plus"></StatButton>
    </div>)
}