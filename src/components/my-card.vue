<template>
  <div class="myCard">
  <myCardLeft/>
  <myCardRight/>
  </div>
</template>

<script>
import myCardLeft from './layout/my-card-left'
import myCardRight from './layout/my-card-right'
export default {
  name: 'myCard',
  components: {
    myCardLeft,
    myCardRight
  }
}
</script>

<style scoped>
</style>
