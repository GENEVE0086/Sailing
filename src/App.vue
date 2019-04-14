<template>
    <div id="app">
        <!--    <img src="./assets/logo.png">-->
        <headers></headers>
        <bottoms></bottoms>
    </div>
</template>

<script>
import Head from '@/components/GH/Head'
import Bottom from '@/components/GH/Bottom'
export default {
  name: 'App',
  components: {
    headers: Head,
    bottoms:Bottom
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
