<template>
  <div id="app">
    <img src="./assets/logo.png">
    <lh-hello></lh-hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    'lh-hello': Hello
  }
}
</script>

<style>
</style>
