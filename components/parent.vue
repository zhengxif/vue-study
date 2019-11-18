<template>
    <div>
        父亲有 {{mny}}
        <!-- 我需要给儿子绑定一个自定义事件 -->
        <!-- 以下相当于 vm.$on('change', change) -->
        <son1 :mny="mny" @change="change"></son1>

        <!-- <son2 :count="count" @update:count = "newValue => count = newValue"></son2> -->
        <!-- 1. 这个写法是上面的简写 默认组件内部会触发update:count-->
        <!-- <son2 :count.sync="count"></son2> -->

        <!-- <son2 :value="count" @input="newValue => count = newValue"></son2> -->
        <!-- 2. 这个写法是上面的简写 默认组件内部触发 input 规定写法-->
        <!-- v-model局限性 只能传递一个属性， 如果只有一个，可以使用v-mode， 传多个依然需要使用.sync -->
        <!-- <son2 v-model="count"></son2> -->


        <!-- 绑定click input 自定义事件，只是名字和原声事件相同 -->
        <son2 ref="son2" :mny="mny" :count="count" @click="show" @mouseup="show"></son2>

    </div>
</template>

<script>
import son1 from './son1'
import son2 from './son2'
/* eslint-disable */ 
console.log(son1)
export default {
    components: {
        son1,
        son2
    },
    mounted() {
        // this.$refs.son2.alert(); 直接在父组件中拿到子组件的实例, 并且ref不要重名

        this.$bus.$on('changeBus', function() {
            console.log('changBus');
        })
    },
    data() {
        return {
            mny: 100,
            count: 2
        }
    },
    methods: {
        show() {
            console.log('show')
        },
        change(newValue) {
            this.mny = newValue;
        }
    }
}
</script>