/**
 *  从层级很深的数据结构中链式获取数据  避免过多的层级判断
 * **/

import isDefined from './isDefined';

export default (obj = {}, path = '') => {
    const keys = path.split('.');
    let result = obj;

    (keys || []).map((key) => {
        result = isDefined(result[key]) ? result[key] : ''
    });
    return result;
}
