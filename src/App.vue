<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->

    <use-partytown 
      script="
        (function (window, document, i) {
          window['dataLayer'] = window[dataLayer] || [];

          window['dataLayer'].push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' });

          var firstScript = document.getElementsByTagName('script')[0];
          var gtmScript = document.createElement('script');
          var dataLayer = 'dataLayer' != 'dataLayer' ? '&l=' + 'dataLayer' : '';

          gtmScript.async = true;

          // ORIGINAL
          gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dataLayer;

          // HACK
          // gtmScript.src = './gtm.js?id=' + i + dataLayer;

          firstScript.parentNode.insertBefore(gtmScript, firstScript);
        })(window, document, 'GTM-W275NLW');
      "
    />

    <h1>Google Tag Manager (GTM) 🎉</h1>

    <p>
      <strong>dataLayer.push</strong>
      <span id="testDataLayer"></span>
    </p>

    <button id="buttonDataLayerPush" @click="gtmPush">Partytown dataLayer.push()</button>

    <use-partytown
      script="
        (function () {
          document.body.classList.add('completed');
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
  methods: {
    gtmPush: function () {
        const data = { event: 'button-click', from: 'partytown' };
        console.log(`GTM dataLayer.push(${JSON.stringify(data)})`);
        dataLayer.push({ event: 'button-click', from: 'partytown' });

        const testDataLayer = document.getElementById('testDataLayer');
        testDataLayer.textContent = 'pushed';
      }
  },
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
