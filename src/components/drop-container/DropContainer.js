import './DropContainer.css';

export default function DropContainer(props) {
    
    const handleDrop = (e) => {
        e.preventDefault();
        props.dropped(e.dataTransfer.getData('championName'));
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    return (<div className="drop-container" onDrop={handleDrop} onDragOver={handleDragOver}>
        {props.children}
    </div>)
}