<template>
    <div id="app">
        <!--    <img src="./assets/logo.png">-->
        <headers></headers>
        <bottoms></bottoms>
        <share></share>
    </div>
</template>

<script>
import Head from '@/components/GH/Head'
import Bottom from '@/components/GH/Bottom'
import share from '@/components/li/share'
export default {
  name: 'App',
  components: {
    headers: Head,
    bottoms:Bottom,
    share:share
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
