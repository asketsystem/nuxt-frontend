// pages/_id/index.vue
<template>
  <div class="page-component">
    <a @click="$router.go(-1)">Go back to overview</a>
    <hr />
    <h1>{{page.fields.heading}}</h1>
    <img :src="page.fields.image.fields.file.url" :alt="page.fields.heading" v-if="page.fields.image" />
    <p>
      {{page.fields.content}}
    </p>
  </div>
</template>

<script>
  import {createClient} from '../../plugins/contentful';
  const contentfulClient = createClient();

  export default {
    name: 'index',
    asyncData ({ env, params }) {
      return contentfulClient.getEntries({
        'content_type': 'page',
        'fields.slug': params.id
      }).then(page => {
        return {
          page: page.items[0]
        }
      }).catch(console.error)
    }
  }
</script>
