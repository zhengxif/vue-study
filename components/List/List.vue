<template>
    <ul>
        <template v-for="a in arr">
            <slot :a="a">
                <!-- 没有传递内容才生效，传的化就使用传进来的template插槽内容 -->
                <li :key="a">{{ a }}</li>
            </slot>
        </template>
    </ul>
</template>

<script>
export default {
    props: ['arr']
}
</script>