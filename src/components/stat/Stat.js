import StatButton from '../stat-button/StatButton';
import './Stat.css';

import { useState } from 'react'

export default function Stat(props) {
    const [value, setValue] = useState(0);

    return (<div>
        <table>
            <tbody>
                <tr>
                    <td title={props.tooltip}>{props.icon}</td>
                    <td><StatButton onPress={() => { if (value < 100) setValue(prevValue => prevValue + 1) }} type="plus"></StatButton></td>
                    <td><input max="99" min="-99" readOnly value={value} className="number-input" type="number" /></td>
                    <td><StatButton onPress={() => { if (value > -100) setValue(prevValue => prevValue - 1) }} type="minus"></StatButton></td>
                </tr>
            </tbody>
        </table>
    </div>)
}