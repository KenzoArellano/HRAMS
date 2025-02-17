<template>
  <div id="app">
    <!-- The current route's component (either Login or Dashboard) will be injected here -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global styles can go here */
</style>
