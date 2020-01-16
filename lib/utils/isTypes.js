/**
 * 判断数据类型
 *
 * **/


export default (function (){
    const isTypes = {};
    const types = ['Null','Undefined','Boolean','Number','String','Object','Array','Map','Function','Symbol','Set'];
    types.map((type)=>{
        isTypes[`is${type}`] = (inp)=>Object.prototype.toString.call(inp) ===`[object ${type}]`
    });
    return isTypes;
})();



