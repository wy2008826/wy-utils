/**
 * 兼容node和浏览器环境
 * 默认1000ms的延迟执行
 *
 * **/

export default (fn, time = 1000) => {
    let timer = null;
    let _global = window || global;
    return function () {
        _global.clearTimeout(timer);
        timer = _global.setTimeout(fn.bind(this, ...arguments), time);//这里劫持掉参数传递 fn中的参数和调用时候的参数保一致
    }
}
