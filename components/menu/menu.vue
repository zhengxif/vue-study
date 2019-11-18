<template>
    <zx-menu>
        <template v-for="menu in data">
            <resub v-if="menu.children" :key="menu.id" :data="menu"></resub>
            <zx-menu-item v-else :key="menu.id">{{menu.name}}</zx-menu-item>
        </template>
    </zx-menu>
</template>
<script>
import resub from './resub'
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    components: {
        resub
    }
}
</script>