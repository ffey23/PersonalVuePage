<template>
  <div id="app">
    <h1>J. Doe's Personal APP</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/contact-me">Contact Me</router-link>
    <router-view />
  </div>
</template>
<style>
#app {
  text-align: center;
}
</style>
