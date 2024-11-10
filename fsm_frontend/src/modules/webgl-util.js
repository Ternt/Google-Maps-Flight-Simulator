export function createContext(canvas, opt_attribs) {
    let types = ['webgl', 'experimental-webgl'];
    let webgl = null;
    for (let i = 0; i < 2; i++) {
        try {
            const contextType = types[i];
            webgl = canvas.getContext(contextType);
        } catch (e) {}
        if (webgl) {
            break;
        }
    }
    return webgl;
}

function loadShader(gl, shaderSource, shaderType) {
    const shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        const lastError = gl.getShaderInfoLog(shader);
        console.error('*** Error compiling shader \'' + shader + '\':' + lastError + `\n` + shaderSource.split('\n').map((l,i) => `${i + 1}: ${l}`).join('\n'));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function createProgram(gl, shaders) {
    const program = gl.createProgram();
    for (let i = 0; i < shaders.length; i++) {
        const shader = shaders[i];
        gl.attachShader(program, shader);
    }
    gl.linkProgram(program);

    const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        const lastError = gl.getProgramInfoLog(program);
        console.error('Error in program linking:' + lastError);

        gl.deleteProgram(program);
        return null;
    }
    return program;
}

export function createProgramFromSources(gl, shaderSources) {
    const shaders = [];
    const shaderTypes = ["VERTEX_SHADER", "FRAGMENT_SHADER"]
    for (let i = 0; i < shaderSources.length; i++) {
        shaders.push(loadShader(gl, shaderSources[i], gl[shaderTypes[i]]));
    }

    return createProgram(gl, shaders);
}