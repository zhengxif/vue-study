<template>
    <div>son1 {{mny}}
        <button @click="changeMoney()">修改钱</button>
        <Grandson1 :mny="mny" @change="change"></Grandson1>
    </div>
</template>


<script>
import Grandson1 from './grandson1'
export default {
    components: {
        Grandson1
    },
    props: {
        mny: {
            type: Number,
        }
    },
     mounted() {
         /* eslint-disable */ 
         console.log(this._events);
    },
    methods: {
        change(newValue) {
            this.$emit('change', newValue);
        },
        changeMoney() {
            this.$emit('change', 200)
        }
    }
}
</script>