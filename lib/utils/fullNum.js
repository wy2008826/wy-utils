/**
 * 将 0-10的数字转换为 '02'的形式 常用于时间的格式化
 * 小于0 以及非数字字符 自动转换成 '00'
 *
 * **/

export default (num) => {
    if (Number.isFinite(num) || Number.isNaN(num) || typeof num !== 'number' || !num) {
        return '00'
    }
    if (num < 0) {
        return '00'
    }
    return num < 10 ? '0' + num : String(num)

}
