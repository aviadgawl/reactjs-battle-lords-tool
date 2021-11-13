import './ThemeButton.css';

export default function ThemeButton(props) {
    return (
        <div onClick={() => {props.onPress(props.theme)}} className="theme-button-grid-container" style={{ width: props.width, height: props.height }}>
            <div className="theme-button-color-one" style={{ backgroundColor: props.theme.background }}></div>
            <div className="theme-button-color-two" style={{ backgroundColor: props.theme.secondaryBackground }}></div>
            <div className="theme-button-color-three" style={{ backgroundColor: props.theme.foreground }}></div>
            <div className="theme-button-color-four" style={{ backgroundColor: props.theme.secondaryForeground }}></div>
        </div>
    );
}