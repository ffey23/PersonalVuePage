<template>
  <div id="app">
    <header>
      <h1 class="title">F. Fey's Personal APP</h1>
      <p class="subtitle">NOT-KNOWING IS TRUE KNOWLEDGE</p>
    </header>
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
<style scoped>
.title {
  font-style: oblique;
  text-align: center;
  font-size: 28px;
  margin-bottom: 13px;
}

.subtitle {
  letter-spacing: 2.5px;
  font-size: 13px;
  color: #4caf50;
  font-weight: bold;
  text-align: center;
  margin-right: 7px;
  margin-left: 7px;
  line-height: 20px;
}

@media screen and (min-width: 992px) {
  header {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 32px;
    margin: 15px 0 10px 15px;
  }

  .subtitle {
    margin-right: 20px;
    margin-top: 34px;
  }
}
</style>
<style>
.container {
  max-width: 1140px;
  margin: auto;
}

body {
  margin: 0;
  position: relative;
}
</style>
