<template>
    <div>grandson2

        {{ $attrs }}
        <button @click="$listeners.click" @mouseup="$listeners.mouseup">点击</button>
    </div>
</template>

<script>
export default {
    inject: ['vm'], // 注入
    props: {

    },
    mounted() {
        /* eslint-disable */ 
        console.log(this.vm);


        this.$nextTick(() => {
            this.$bus.$emit('changeBus');
        })
    }
}
</script>