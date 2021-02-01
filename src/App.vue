<template>
  <div id="app">
    <h1 class="title">J. Doe's Personal APP</h1>
    <Navigation :links="links" />
    <router-view />
  </div>
</template>
<script>
import { Navigation } from './components'
import { links } from './constants'
export default {
  components: {
    Navigation
  },
  data() {
    return {
      links
    }
  }
}
</script>
<style>
nav {
  text-align: center;
}
.title {
  text-align: center;
}
</style>
