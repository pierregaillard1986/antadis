<template>
  <div id="app">
    <myCard/>
    {{posts.name}}
  </div>
</template>

<script>
import myCard from './components/my-card'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    myCard
  },
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    axios.get(`https://cors.io/?http://gaillard_k9gko.recrutement.antadis.fr/api/product.json`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style>
#app {

}
</style>