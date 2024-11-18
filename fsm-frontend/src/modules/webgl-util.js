
let WebGLUtils = function() {

    let setupWebGL = (canvas) => {
        let context = createContext(canvas);
        if (!context) {
            console.error("Seems like your browser does not support WebGL.");
        }

        return context;
    };


    let setupWebGL2 = (canvas) => {
        let context = canvas.getContext("webgl2");
        if (!context) {
            console.error("Seems like your browser does not support WebGL2.");
        }

        return context;
    };

    function createContext(canvas, opt_attribs) {
        let contexts = ['webgl', 'experimental-webgl'];
        let gl_context = null;
        for (let i = 0; i < 2; i++) {
            try {
                const default_context = contexts[i];
                gl_context = canvas.getContext(default_context);
            } catch (e) {}
            if (gl_context) {
                break;
            }
        }
        return gl_context;
    }

    function loadShader(context, shaderSource, shaderType) {
        const shader = context.createShader(shaderType);
        context.shaderSource(shader, shaderSource);
        context.compileShader(shader);

        const compiled = context.getShaderParameter(shader, context.COMPILE_STATUS);
        if (!compiled) {
            const lastError = context.getShaderInfoLog(shader);
            console.error('*** Error compiling shader \'' + shader + '\':' + lastError + `\n` + shaderSource.split('\n').map((l,i) => `${i + 1}: ${l}`).join('\n'));
            context.deleteShader(shader);
            return null;
        }

        return shader;
    }

    function createProgram(context, shaders) {
        const program = context.createProgram();
        for (let i = 0; i < shaders.length; i++) {
            const shader = shaders[i];
            context.attachShader(program, shader);
        }
        context.linkProgram(program);

        const linked = context.getProgramParameter(program, context.LINK_STATUS);
        if (!linked) {
            const lastError = context.getProgramInfoLog(program);
            console.error('Error in program linking:' + lastError);

            context.deleteProgram(program);
            return null;
        }
        return program;
    }

    function createProgramFromSources(context, shaderSources) {
        const shaders = [];
        const shaderTypes = ["VERTEX_SHADER", "FRAGMENT_SHADER"]
        for (let i = 0; i < shaderSources.length; i++) {
            shaders.push(loadShader(context, shaderSources[i], context[shaderTypes[i]]));
        }

        return createProgram(context, shaders);
    }

    return {
        setupWebGL: setupWebGL,
        setupWebGL2: setupWebGL2,
        createProgramFromSources: createProgramFromSources
    }
}();

export default WebGLUtils;
