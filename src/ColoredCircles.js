import { useState } from "react"
import Circle from "./Circle"
import ColoredButtons from "./ColoredButtons";

function getRandom(min = 0, max = 100) {
    return Math.random() * (max-min) + min;
}

const ColoredCircles = () => {
    const [circles, setCircles] = useState([]);

    const addCircle = (color) => {
        setCircles(circles => {
            return[...circles, { color, x: getRandom(), y: getRandom() }]
        })
    }

    const randomize = () => {
        setCircles(circles => (
            circles.map(c => ({...c, x:getRandom(), y:getRandom() }))
        )
        )
    }
// //oroginal way - easier to read 
    // const changePosition = idx => {
    //     setCircles(circles => {
    //         const copy = [...circles];
    //         copy[idx].x = getRandom();
    //         copy[idx].y = getRandom();
    //         return copy;
    //     });
    // }

// doing the same thing as above but different way
    const changePosition = idx => {
        setCircles(circles => (
            circles.map((circle, i) =>(
                i === idx ?
                {...circle, x: getRandom(), y: getRandom()}
                : circle
            ))
        ))
    }

    return (
      <div>
        <ColoredButtons 
            addCircle={addCircle}
            options={['peachpuff', 'cornflowerblue', 'thistle', 'lightseagreen', 'lavender']} 
        />

      <button onClick={randomize}>Randomize All</button>

        {circles.map(({color, x, y}, idx) => (
          <Circle 
            changePosition={changePosition} 
            color={color} 
            x={x} 
            y={y} 
            idx={idx} 
            key={idx} 
          />
        ))}
      </div>
    );    
}

export default ColoredCircles