<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <strong>window.fetch(url) text</strong>
    <code>
      <span id="testFetchText"></span>
    </code>

    <use-partytown 
      script="
        (async function () {
          const elm = document.getElementById('testFetchText');
          const rsp = await window.fetch('text.txt');
          const text = await rsp.text();
          elm.textContent = text;
          elm.className = 'testFetchText';
        })();
      "
    />
    
    <!-- <my-partytown/> -->
    
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import MyPartytown from './components/MyPartytown.vue'

export default {
  // components: {
  //   MyPartytown
  // }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
