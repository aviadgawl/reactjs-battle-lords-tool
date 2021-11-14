import './ChampionAdd.css';

import StatButton from '../stat-button/StatButton';

export default function ChampionAdd(props) {
    const championNamesList = ['David' , 'Shimshon' , 'The Rock' , 'Mor' , 'Sigalit' , 'Aviad'];

    const handelOnPress = () => {
        props.onPress(championNamesList[0]);
    }

    return (<div className="champion-add">
        <StatButton onPress={handelOnPress} type="plus"></StatButton>
    </div>)
}