<template>
    <div>
        <Parent @say="say">11</Parent>
    </div>
</template>
<script>
import Parent from './components/parent'
export default {
    provide() {
        return {vm:this}
    },
    components: {
        Parent
    },
    methods: {
        say() {
            
        }
    }
}
</script>