<template>
  <div id="app">
    <h1 class="title">J. Doe's Personal APP</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/contact-me">Contact Me</router-link>
    </nav>
    <router-view />
  </div>
</template>
<style>
nav {
  text-align: center;
}
.title {
  text-align: center;
}
</style>
