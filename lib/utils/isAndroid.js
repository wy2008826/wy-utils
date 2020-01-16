/**
 * 判断是否是安卓设备
 *
 * **/

export default () => {
    return  /android/.test(navigator.userAgent.toLowerCase());
}
