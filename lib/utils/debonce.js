export default (fn, time = 1000) => {
    let timer = null;
    let _global = window || global;
    return (clear) => {
        _global.clearTimeout(timer);
        if (!clear) {
            timer = _global.setTimeout(fn, time)
        }
    }
}

