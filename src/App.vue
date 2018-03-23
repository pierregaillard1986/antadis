<template>
<div id="app" :if="posts">
  <div class="navbar">
    <div class="container">
      <img src="../src/assets/pictures/logo.png" alt="logo antadis" class="mx-auto d-block">
    </div>
  </div>
  <myCard :if="posts" :posts="posts"></myCard>
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
      posts: {},
      errors: {}
    }
  },
  created() {
    axios.get(`https://crossorigin.me/http://gaillard_k9gko.recrutement.antadis.fr/api/product.json`)
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>
body {
  background-color: #EAEAF3;
}
</style>
