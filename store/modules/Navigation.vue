<template>
  <div class="navigation">
    <nav>
      <ul role="menu">
        <li v-for="(navItem, index) in navItems" :key="index">
          <nuxt-link :to="'/' + navItem.fields.slug.trim()" role="menuitem">{{navItem.fields.navTitle}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'Navigation',
    computed: {
      ...mapState('navigation', [
        'navItems'
      ])
    },
    mounted() {
      this.$store.dispatch("navigation/getPageItems");
    }
  }
</script>
