import './Draggable.css';
import { useState } from 'react';

export default function Draggable(props){
    const [dragged , setDragged] = useState(false);

    const handleDragStart = (e) => {
        setDragged(true);
        e.dataTransfer.setData('championName' , e.target.id);
    }

    const handleDragEnd = (e) => {
        setDragged(false);
    }

    return (<div id={props.dragId} className={dragged ? 'dragged': ''} onDragEnd={handleDragEnd} onDragStart={handleDragStart} draggable={true}>
        {props.children}
    </div>)
}