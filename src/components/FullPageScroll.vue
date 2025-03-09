<template>
    <div id="fullpage">
      <slot /> <!-- The router-view content will be injected here -->
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import fullpage from 'fullpage.js';
  
  export default {
    name: 'FullPageScroll',
    setup() {
      onMounted(() => {
        new fullpage('#fullpage', {
          navigation: true,
          scrollOverflow: true,
          loopBottom: true,
          autoScrolling: true,
        });
      });
    },
  };
  </script>
  
  <style scoped>
  #fullpage {
    height: 100vh;
  }
  .section {
    text-align: center;
    padding: 100px;
    font-size: 24px;
  }
  </style>
  