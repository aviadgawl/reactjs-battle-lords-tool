import Stat from '../stat/Stat';

export default function Champion(props) {
    return <div>
        <div>
            <h3>{props.championName}</h3>
        </div>
        <div>
            <Stat header="STR"></Stat>
            <Stat header="DEX"></Stat>
            <Stat header="INT"></Stat>
            <Stat header="HP"></Stat>
        </div>
    </div>
}