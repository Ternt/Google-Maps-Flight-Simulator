import { createContext } from "./modules/webgl-util";

function init() {
    const canvas = document.getElementById("webgl-canvas");
    const gl = createContext(canvas);
    if (!gl) {
        canvas.innerHTML = "<h1>webgl not supported</h1>";
    }

    // Clear the canvas.
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

init();
