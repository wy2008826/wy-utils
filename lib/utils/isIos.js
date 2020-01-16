/**
 * 判断是否是IOS设备
 *
 * **/
export default () => {
    let u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
