<template>
  <div class="myCardRightHeader">
    <h1><span>Petit</span> Monstre Guerrier</h1>
    <h5 class="pt-2">{{posts.description_short}}</h5>
  </div>
</template>

<script>
export default {
  props:['posts'],
  name: 'myCardRightHeader'
}
</script>

<style scoped>
h1 {
  color: #79609F;
  font-weight: bold;
}

h1 span {
  border-bottom: 2px solid #F4F4F4;
}

h5 {
  font-style: italic;
  color: #3A3A3A;
}

.block {
  display: block;
}
</style>
