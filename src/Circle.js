import "./Circle.css";

// circle component - takes props as arg - returns a div with a classname and styles the background color based off what it was given - displays the index+1 within the div
const Circle = ({ color, idx, x, y, changePosition }) => {
    return (
        <div
            onClick={() => changePosition(idx)}
            className="Circle"
            style={{
                backgroundColor: color,
                position: `absolute`,
                top: `${y}vh`,
                left: `${x}vw`
            }}
        >
            {idx + 1}
        </div>
    )
}

export default Circle;