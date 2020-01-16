/**
 *
 * 驼峰化字符串
 *
 * **/

const camelizeRE = /-(\w)/g;
export default (str) => {
    return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}
