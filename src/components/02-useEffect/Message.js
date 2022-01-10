import React, { useEffect, useState } from 'react';

export const Message = () => {

    // set the default values of the component which will trigger the coordinates of the mouse
    // on the screen to zero, then they are destructured for further use
    const [coords, setCoords] = useState({x:0, y:0});
    const {x, y} = coords;

    // inside the useEffect, we declare a function matching the 'mousemove' event to extract the
    // values from any movement on the cursor whenever it is moved after the Message component is launched
    useEffect(() => {
        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            setCoords(coords);
        }

        // listener used with the 'mousemove' event which take our mouseMove function as argument
        window.addEventListener('mousemove', mouseMove);

        // if we dont return a listener remover, even after the component has stopped rendering it would
        // continue to work, whats even worse, if the component was to be rendered again it would duplicate the 
        // useEffect, taking massive amounts of memory from the computer, is imperative to remove the listener
        // or whatever function is called with the useEffect.
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h1>Mouse Coordinates triggered!!</h1>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}
