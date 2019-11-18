 /* eslint-disable */
import MessageComponent from './Message.vue'
import Vue from 'vue'

// 单例
let instance;
let getVueInstance = () => {
    instance = new Vue({
        render: h => h(MessageComponent)
    }).$mount();
     // 将渲染好的内容放到页面中
     document.body.appendChild(instance.$el);
}
const Message = {
    success(options) {
        // 点击弹窗， 需要将组件挂载到内存中
        !instance && getVueInstance();
        instance.$children[0].add(options);
    }
}

export {
    Message
}
export default {
    //  默认Vue.use就会调用这个方法
    install(_Vue) { //_Vue是当前的构造函数
        // 在这个函数里可以
        // 1）注册全局组件 2）注册全局指令 3）往原型上添加方法
        let $message = {};
        Object.keys(Message).forEach( key => {
            $message[key] = Message[key];
        })
        Vue.prototype.$message = $message;
    }
}