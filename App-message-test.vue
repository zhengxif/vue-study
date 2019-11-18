<template>
    <div @click="show">弹层</div>
</template>

<script>
// import { Message } from './components/message/message.js'  
import Vue from 'vue'
import Message from './components/message/message.js'
Vue.use(Message); // use方法使用的时候，默认会调用内部的install方法
export default {
    methods: {
        show() {
            // Message.success({
            //     message: 'hello',
            //     duration: 3000
            // })
            this.$message.success({
                message: 'hello',
                duration: 3000
            })
        }
    }
}
</script>