'use strict';

let Model = function() {
	/**
	 * Load and parse .obj files
	 * @param {string} obj_path - a path to the .obj file
	 * @return {object} model - a buffer containing all parsed
	 */
	let loadOBJ = async function (obj_path) {
		const response = await fetch(obj_path);
		const text = await response.text();
		return parseOBJ(text);
	}

	//  https://webglfundamentals.org/webgl/lessons/webgl-load-obj.html
	/**
	 * Parses .obj file
	 * @param {string} text - the .obj file that was read
	 * @return {object} model - an object containing all the parsed data
	 */
	let parseOBJ = function(text) {
		text = text.trim();

		// because indices are base 1 let's just fill in the 0th data
		const positions = [[0, 0, 0]];
		const texcoords = [[0, 0]];
		const normals   = [[0, 0, 0]];

		// same order as `f` indices
		const objVertexData = [
			positions,
			texcoords,
			normals,
		];

		// same order as `f` indices
		let webglVertexData = [
			[],   // positions
			[],   // texcoords
			[],   // normals
		];

		function addVertex(vert) {
			const ptn = vert.split('/');
			ptn.forEach((objIndexStr, i) => {
				if (!objIndexStr) {
					return;
				}
				const objIndex = parseInt(objIndexStr);
				const index = objIndex + (objIndex >= 0 ? 0 : objVertexData[i].length);
				webglVertexData[i].push(...objVertexData[i][index]);
			});
		}

		const keywords = {
			v(values) {
				positions.push(values.map(parseFloat));
			},
			vt(values) {
				texcoords.push(values.map(parseFloat));
			},
			vn(values) {
				normals.push(values.map(parseFloat));
			},
			f(values) {
				const numOfTriangles = values.length - 2;
				for (let tri = 0; tri < numOfTriangles; ++tri) {
					addVertex(values[0]);
					addVertex(values[tri + 1]);
					addVertex(values[tri + 2]);
				}
			}
		}

		const lines = text.split('\n');
		for (let lineNum = 0 ; lineNum < lines.length ; ++lineNum) {
			const line = lines[lineNum];
			if (line === '' || line.startsWith('#')) {
				continue;
			}

			const [ keyword, ...values ] = line.split(' ');
			const handler = keywords[keyword];
			if (!handler) {
				console.warn('unhandled keyword ', keyword, 'at line ', lineNum);
				continue;
			}
			handler(values);
		}

		return {
			position: webglVertexData[0],
			texcoord: webglVertexData[1],
			normal: webglVertexData[2],
		};
	}

	return {
		loadOBJ: loadOBJ,
	};
}();

export default Model;


