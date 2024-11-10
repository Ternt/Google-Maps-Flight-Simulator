import React, { useRef, useEffect } from "react";
import {createContext} from './modules/webgl-util'

const App = () => {
    return (
        <>
            <Context></Context>
        </>
    )
}

const Context = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl');

        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }, []);

    return <canvas id="gl-canvas" height={600} width={600} ref={canvasRef}></canvas>
}

export default App
