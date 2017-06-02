/**
 * Created by Administrator on 2017/6/2 0002.
 */
(function (window) {
    var MyPlugin={};
    MyPlugin.install=function (Vue,options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod=function () {
            console.log('Vue的全局方法执行了 myGlobalMethod()')
        };
        // 2. 添加全局资源
        Vue.directive('my-directive',function (val) {
            this.el.innerHTML=val.length;
        });
        // 3. 添加实例方法
        Vue.prototype.$myMethod=function () {
            console.log('Vue实例的方法执行了 $myMethod()')
        }
    }
    //暴露
    window.MyPlugin = MyPlugin;
})(window);