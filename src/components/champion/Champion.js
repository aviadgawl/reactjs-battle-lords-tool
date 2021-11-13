import Stat from '../stat/Stat';
import { icons } from '../../common/icons';

export default function Champion(props) {
    return <div>
        <div>
            <h3>{props.championName}</h3>
        </div>
        <div>
            <Stat icon={icons.force} tooltip="STR"></Stat>
            <Stat icon={icons.speed} tooltip="DEX"></Stat>
            <Stat icon={icons.smart} tooltip="INT"></Stat>
            <Stat icon={icons.life} tooltip="HP"></Stat>
        </div>
    </div>
}