<template>
    <div>grandson1 {{ mny }}

        <button @click="change">修改钱</button>
    </div>
</template>

<script>
export default {
    props: {
        mny: {
            type: Number
            
        }
    },
    methods: {
        change() {
            // 触发自己身上的change
            // this.$emit('change', 300);
            // 触发父亲身上的change
            this.$parent.$emit('change', 400);
        }
    }
}
</script>