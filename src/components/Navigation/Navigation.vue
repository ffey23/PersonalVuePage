<template>
  <div class="navigation">
    <div class="navigation__mobile-nav">
      <Slide :close-on-navigation="true">
        <router-link v-for="link in links" :key="link.to" :to="link.to">{{
          link.title
        }}</router-link>
      </Slide>
    </div>
    <div class="navigation__desktop-nav">
      <nav>
        <router-link v-for="link in links" :key="link.to" :to="link.to">{{
          link.title.toUpperCase()
        }}</router-link>
      </nav>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import { Slide } from 'vue-burger-menu'
import { Link } from './types'
export default {
  components: {
    Slide
  },
  props: {
    links: {
      type: Array,
      required: true,
      validator: function (links) {
        return _.every(links, (link) => link instanceof Link)
      }
    }
  }
}
</script>
<style scoped>
/* navigation bar - shared by mobile and desktop nav bar*/
.navigation {
  height: 44px;
  background-color: #5f5f5f;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

/* toggling between desktop's nav bar and mobile's nav bar*/
.navigation__desktop-nav {
  display: none;
}
.navigation__mobile-nav {
  display: block;
}
@media screen and (min-width: 992px) {
  .navigation__mobile-nav {
    display: none;
  }

  .navigation__desktop-nav {
    display: block;
  }
}

/* Link styles that mobile and desktop navigation shares */
a {
  font-family: Helvetica, sans-serif;
  font-size: 22px;
  text-decoration: none;
  color: #f1f1f1;
}
a.router-link-exact-active {
  background-color: #4caf50;
  color: #fff;
}

/* horizontally aligning navigation for desktop */
.navigation__desktop-nav > nav {
  display: flex;
}
.navigation__desktop-nav a {
  display: block;
  padding: 10px 15px 9px;
}

/* burger button styling */
.navigation__mobile-nav ::v-deep .bm-burger-button {
  width: 28px;
  height: 23px;
  /* positioning burger button to be on top of navigatin bar */
  top: 11px;
  left: 11px;
}
.navigation__mobile-nav ::v-deep .bm-burger-bars {
  background-color: #f1f1f1;
}

/* burger menu styling */
.navigation__mobile-nav ::v-deep .bm-menu {
  background-color: #5f5f5f;
}
.navigation__mobile-nav ::v-deep .bm-item-list {
  margin-left: 0;
}
.navigation__mobile-nav ::v-deep .bm-item-list > a {
  padding-left: calc(0.7em + 10%);
  color: #f1f1f1;
}
</style>
