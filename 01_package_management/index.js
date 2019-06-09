/**
 * commonjs 规范加载
 * @type {{coungFun, count}|*}
 */
var counter=require("./counter.common")
console.log(counter.count);
counter.countFun();
console.log(counter.count);//值不会改变

/**
 *  UMD 方式加载模块
 */
var counterAMD=require("./counter.umd").default;
console.log(counterAMD.count);
counterAMD.countFun();
console.log(counterAMD.count);//值不会改变

/**
 *  UMD 方式加载模块
 */
var counterAMDExports=require("./counter.umd.exports");
console.log(counterAMDExports.count);
counterAMDExports.countFun();
console.log(counterAMDExports.count);//值会改变
