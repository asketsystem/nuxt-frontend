<template>
  <section class="container">
    <Navigation />
    <div class="container__content">
      <h1>Please select a page you wish to view</h1>
      <p>This is a website for demo purposes of using Nuxt & Contentful together</p>
    </div>
  </section>
</template>
<script>
import Navigation from '../components/Navigation';
import {createClient} from '../plugins/contentful';
const contentfulClient = createClient();
export default {
    components: {
      Navigation
    },

  }
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

