<template>
<div class="myCard card fullSize ml-auto mr-auto container-fluid">
  <div class="card-body">
    <div class="row justify-content-around">
      <myCardLeft/>
      <myCardRight/>
    </div>
  </div>
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
.fullSize {
  width: 80%;
}
</style>
