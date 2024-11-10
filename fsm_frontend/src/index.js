import { createContext, createProgramFromSources } from "./modules/webgl-util";

function createShader(gl, type, source) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}

function init() {
    const canvas = document.getElementById("webgl-canvas");
    const gl = createContext(canvas);
    if (!gl) {
        canvas.innerHTML = "<h1>webgl not supported</h1>";
    }


    const program =
        createProgramFromSources(gl, ['./shaders/basic_vert.glsl','./shaders/basic_frag.glsl']);

    // Clear the canvas.
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT)
}

init();
