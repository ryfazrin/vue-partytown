<template>
  <div>
    <strong>window.fetch(url) text</strong>
    <code>
      <span id="testFetchText"></span>
    </code>
    <script type="text/partytown">
        (async function () {
          const elm = document.getElementById('testFetchText');
          const rsp = await window.fetch('text.txt');
          const text = await rsp.text();
          elm.textContent = text;
          elm.className = 'testFetchText';
        })();
    </script>
  </div>
</template>

<script>
export default {
  name: "MyPartytown"
}
</script>

<style>

</style>