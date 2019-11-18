<template>
    <div>
        <div v-for="(layer) in layers" :key="layer.id">
            {{ layer.message }} {{ layer.id }}
        </div>
    </div>
</template>

<script>
export default {
    // 每次点击按钮时，都是增加数据，自动渲染视图
    data() {
        return {
            layers: []
        }
    },
    mounted() {
        this.id = 0;
    },
    methods: {
        add(options) { // 增加一个序号，时间到了，需要根据序号将它移除
            let layer = { ...options, id: ++this.id };
            this.layers.push(layer);

            layer.time = setTimeout(() => {
                this.remove(layer);
            }, options.duration)
        },
        remove(layer) {
            clearTimeout(layer.time);
            this.layers = this.layers.filter( item => item.id !== layer.id);
        }
    }
}
</script>