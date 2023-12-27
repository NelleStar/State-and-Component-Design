import ColoredButton from "./ColoredButton";

const ColoredButtons = ({ options, addCircle }) => {
    return (
        <div className="ColoredButtons">
            {options.map(color => (
                <ColoredButton color={color} addCircle={addCircle}/>
            ))}
        </div>
    )
}
export default ColoredButtons;