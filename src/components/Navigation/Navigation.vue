<template>
  <nav>
    <router-link v-for="link in links" :key="link.to" :to="link.to">{{
      link.title
    }}</router-link>
  </nav>
</template>
<script>
import _ from 'lodash'
import { Link } from './types'
export default {
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
