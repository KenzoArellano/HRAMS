<template>
  <div id="app">
    <!-- FullPageScroll component will be wrapped around the content -->
    <FullPageScroll>
      <!-- The current route's component (either Login or Dashboard) will be injected here -->
      <router-view />
    </FullPageScroll>
  </div>
</template>

<script>
// Import FullPageScroll component
import FullPageScroll from './components/FullPageScroll.vue';

export default {
  name: 'App',
  components: {
    FullPageScroll, // Registering FullPageScroll
  },
};
</script>

<style>
/* Global styles can go here */
</style>
