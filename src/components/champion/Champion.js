import './Champion.css';

import Stat from '../stat/Stat';
import { icons } from '../../common/icons';

export default function Champion(props) {
    return <div style={{display:'inline-block'}}>
        <div className="champion-header-container">
            <span>{props.championName}</span>
        </div>
        <div>
            <Stat icon={icons.force} tooltip="STR"></Stat>
            <Stat icon={icons.speed} tooltip="DEX"></Stat>
            <Stat icon={icons.smart} tooltip="INT"></Stat>
            <Stat icon={icons.life} tooltip="HP"></Stat>
        </div>
    </div>
}