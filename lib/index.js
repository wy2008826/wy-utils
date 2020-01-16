import debonce from './utils/debonce';
import fullNum from './utils/fullNum';
import isTypes from './utils/isTypes';
import isDefined from './utils/isDefined';
import getValueFromDeepObj from './utils/getValueFromDeepObj';
import camelize from './utils/camelize';
import isAndroid from './utils/isAndroid';
import isIos from './utils/isIos';

export default {
    debonce,//防抖
    fullNum,//小于10 的数据格式化
    isDefined,//是否已定义
    getValueFromDeepObj,//从深层级数据结构中获取字段值
    camelize,//将字符串转换为驼峰命名形式
    isAndroid,//判断设备是否是安卓
    isIos,//判断设备是否是Ios
    ...isTypes,//判断数据类型
}
