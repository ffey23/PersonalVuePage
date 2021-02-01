<template>
  <nav>
    <div class="navigation--mobile">
      <Slide :close-on-navigation="true">
        <router-link v-for="link in links" :key="link.to" :to="link.to">{{
          link.title
        }}</router-link>
      </Slide>
    </div>
    <div class="navigation--desktop">
      <router-link v-for="link in links" :key="link.to" :to="link.to">{{
        link.title
      }}</router-link>
    </div>
  </nav>
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
.navigation--desktop {
  display: none;
}
@media screen and (min-width: 992px) {
  .navigation--mobile {
    display: none;
  }

  .navigation--desktop {
    display: block;
  }
}
</style>
