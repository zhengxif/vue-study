<template>
  <div id="app">
   我的年龄： {{ $store.state.age }}
  <br />
  <button @click="add">+</button>
  <button @click="asyncMinus">异步减少</button>
  <!-- {{ $store.state.a.a }} -->
  </div>
</template>

<script>

export default {
  mounted() {
    console.log(this.$store)
  },
  methods: {
    add() {
      this.$store.commit('syncAdd', 10)
    },
    asyncMinus() {
      this.$store.dispatch('asyncMinus', 5);
    }
  }
}
</script>

