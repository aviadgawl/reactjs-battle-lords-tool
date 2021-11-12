import StatButton from '../stat-button/StatButton';
import './Stat.css';

export default function Stat(props) {
    return <div>
        <table>
            <tr>
                <td className="header"><span>{props.header}: </span></td>
                <td><StatButton type="plus"></StatButton></td>
                <td><input max="99" min="-99" className="number-input" type="number" /></td>
                <td><StatButton type="minus"></StatButton></td>
            </tr>
        </table>
    </div>
}