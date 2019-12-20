import debonce from './utils/debonce';
import fullNum from './utils/fullNum';
import isTypes from './utils/isTypes';

export default {
    debonce,//防抖
    fullNum,//小于10 的数据格式化
    ...isTypes,//判断数据类型
}
