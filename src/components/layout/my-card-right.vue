<template>
<div class="myCardRight col-lg-6 col-md-12 ml-auto mr-auto block">
  <myCardRightHeader :posts="posts"></myCardRightHeader>
  <myCardRightContentDesktop :posts="posts"></myCardRightContentDesktop>
  <myCardRightContentFooter :posts="posts"></myCardRightContentFooter>
</div>
</template>

<script>
import myCardRightHeader from './content-my-card-right/my-card-right-header'
import myCardRightContentDesktop from './content-my-card-right/my-card-right-content-desktop'
import myCardRightContentFooter from './content-my-card-right/my-card-right-footer'

export default {
  props:['posts'],
  name: 'myCardRight',
  components: {
    myCardRightHeader,
    myCardRightContentDesktop,
    myCardRightContentFooter
  }
}
</script>

<style scoped>
</style>
