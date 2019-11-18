<template>
    <zx-submenu>
        <!-- 标题 -->
        <template slot="title">{{ data.name }}</template>
        <!-- 子菜单内容 -->
        <template v-for="menu in data.children">
            <!-- 如果还有children，递归自己 -->
            <r-sub :data="menu" :key="menu.id" v-if="menu.children"></r-sub>
            <zx-menu-item v-else :key="menu.id">{{menu.name}}</zx-menu-item>
        </template>
    </zx-submenu>
</template>
<script>
export default {
    name: 'r-sub', // 递归组件 需要给当前要递归的组件 提供一个name属性，并且可以在当前组件内，通过name来调用自己 
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>