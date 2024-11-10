
export function createContext(canvas, opt_attribs) {
    let specs = ['webgl', 'experimental-webgl'];
    let webgl = null;
    for (const contextId in specs) {
        try {
            webgl = canvas.getContext(contextId);
            console.log(webgl);
        } catch (e) {}
        if (webgl) {
            break;
        }
    }
    return webgl;
}
