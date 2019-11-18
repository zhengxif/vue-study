<template>
    <div>
        <Level type="1">
            <span>hahh</span>
        </Level>
        <Level type="2">
            <span>hahh</span>
        </Level>
        <Level type="3">
            <span>hahh</span>
        </Level>
        <Level type="4">
            <span>hahh</span>
        </Level>

        <!-- 作用域插槽 -->
        <List :arr="arr">
            <!-- 希望拿到内部每次循环的结果,然后自己自定义 -->
            <template v-slot="{a}">
                <li># {{ a }}</li>
            </template>
        </List>
    </div>
</template>
<script>
import Level from './components/levelFunctional/LevelFunctional'
import List from './components/List/List'
export default {
    components: {
        Level,
        List
    },
    data() {
        return {
            arr: [1,2,3]
        }
    }
}
</script>