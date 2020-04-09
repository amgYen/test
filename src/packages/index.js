// import zhuUi from "zhu-ui"
// Vue.use(zhuUi);
// <zh-button></zh-button>

import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
const install = (Vue) =>{
    //Vue.component具体做什么事情了
    Vue.component(Button.name,Button)
    Vue.component(Icon.name,Icon)
    Vue.component(ButtonGroup.name,ButtonGroup)
}
//script 引入vue是放在window上 而import 方式是放入模块内
if(typeof window.Vue !== 'undefined'){
    install(Vue); // 全局直接通过script 引用的方式会默认调用install方法
}
export default {
    install
}