import WebGLUtils from './modules/webgl-util';
import OBJLoader from './modules/objloader';

async function main() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = WebGLUtils.setupWebGL(canvas);

    let vertexShaderSource = require('./shaders/basic_vert.glsl');
    let fragmentShaderSource = require('./shaders/basic_frag.glsl');

    const response = await fetch('./assets/PaperAirplane.obj');
    const text = await response.text();
    console.log(text);

    const program = 
		WebGLUtils.createProgramFromSources(gl, [vertexShaderSource, fragmentShaderSource]);

	gl.useProgram(program);

	// get attribute and uniform location in the shader
	const positionLocation = gl.getAttribLocation(program, 'a_position');
	
	// attributes get their data from buffers
	const positionBuffer = gl.createBuffer();
	
	// bind resource to a bind point
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	// put data in the buffer which requires strongly typed data.

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT)

    gl.drawArrays(gl.TRIANGLES, 0, 3);

	console.log('Hello, WebGL!');
}

main();
