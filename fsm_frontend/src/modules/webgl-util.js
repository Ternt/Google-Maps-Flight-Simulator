

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