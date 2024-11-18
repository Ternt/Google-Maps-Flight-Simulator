import WebGLUtils from './modules/webgl-util';
import Model from './modules/model-loader';
import * as m4 from './modules/webgl-3d-math';

async function main() {
	const canvas = document.getElementById('webgl-canvas');
	const gl = WebGLUtils.setupWebGL(canvas);

	let vertexShaderSource = require('./shaders/basic_vert.glsl');
	let fragmentShaderSource = require('./shaders/basic_frag.glsl');
	const program = WebGLUtils.createProgramFromSources(gl, [vertexShaderSource, fragmentShaderSource]);

	const plane = await Model.loadOBJ('./assets/cube.obj');
	console.log(plane);

	gl.useProgram(program);
	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
	const normalAttribLocation = gl.getAttribLocation(program, "a_normal");
	const worldMatrixUniformLocation = gl.getUniformLocation(program, "u_world");
	const viewMatrixUniformLocation = gl.getUniformLocation(program, "u_view");
	const projectionMatrixUniformLocation = gl.getUniformLocation(program, "u_projection");

	const positionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(plane.position), gl.STATIC_DRAW);

	gl.enableVertexAttribArray(positionAttributeLocation);
	gl.vertexAttribPointer(
		positionAttributeLocation,
		3,
		gl.FLOAT,
		false,
		0,
		0
	);

	const normalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(plane.normal), gl.STATIC_DRAW);

	gl.enableVertexAttribArray(normalAttribLocation);
	gl.vertexAttribPointer(
		normalAttribLocation,
		3,
		gl.FLOAT,
		false,
		0,
		0
	);

	const cameraTarget = [0, 0, 0];
	const cameraPosition = [0, 0, 4];
	const zNear = 0.1;
	const zFar = 50;

	function degToRad(deg) {
		return deg * Math.PI / 180;
	}

	let last_time = 0;
	function draw(time) {
		let delta_time = time - last_time;

		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
		gl.clear(gl.COLOR_BUFFER_BIT)
		gl.enable(gl.DEPTH_TEST);
		gl.enable(gl.CULL_FACE);

		gl.uniformMatrix4fv(
			worldMatrixUniformLocation,
			false,
			m4.xRotate(m4.identity(), 60)
		);

		const fieldOfViewRadians = degToRad(60);
		const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
		const projection = m4.perspective(fieldOfViewRadians, aspect, zNear, zFar);

		gl.uniformMatrix4fv(
			projectionMatrixUniformLocation,
			false,
			projection,
		);

		const up = [0, 1, 0];
		const camera = m4.lookAt(cameraPosition, cameraTarget, up);

		const view = m4.inverse(camera);

		gl.uniformMatrix4fv(
			viewMatrixUniformLocation,
			false,
			view,
		);

		gl.drawArrays(gl.TRIANGLES, 0, plane.position.length/3);
		requestAnimationFrame(draw);
	}

	requestAnimationFrame(draw)
	console.log('Hello, WebGL!');
}

main();
