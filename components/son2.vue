<template>
    <div>son2
        <!-- count: {{ count }}
        <button @click="changeCount">修改count</button>

        <div>
            value: {{value}}
             <button @click="changeValue">修改value</button>
        </div> -->

        <div>
            <!-- 属性集合 -->
            <!-- {{ $attrs }} -->
        </div>
        <!-- 将属性和方法全部向下传递 -->
        <Grandson2 v-bind="$attrs" v-on="$listeners"></Grandson2>

    </div>
</template>

<script>
import Grandson2 from './grandson2'
export default {
    // 父亲传递给子元素 -> 儿子有三个属性用不到 -> 孙子
    inheritAttrs: false,
    components: {
        Grandson2
    },
    // 如果组件中使用了 props， 就会将attrs 从当前$attrs移除掉
    props: {
        // mny: {
        //     type: Number
        // },
        // value: {
        //     type: Number
        // },
        // count: {
        //     type: Number
        // }
    },
    mounted() {
        /* eslint-disable */ 
        console.log(this.$listeners)
    },
    methods: {
        alert() {
            alert(1)
        },
        changeValue() {
            this.$emit('input', 33);
        },
        changeCount() {
            this.$emit('update:count', 3);
        }
    }
}
</script>