<template>
  <div class="myCardRight">
  <p> bonjour myCardRight</p>
  <myCardRightHeader/>
  <myCardRightContentDesktop/>
  <myCardRightContentMobile/>
  <myCardRightContentFooter/>
  </div>
</template>

<script>
import myCardRightHeader from './content-my-card-right/my-card-right-header'
import myCardRightContentDesktop from './content-my-card-right/my-card-right-content-desktop'
import myCardRightContentMobile from './content-my-card-right/my-card-right-content-mobile'
import myCardRightContentFooter from './content-my-card-right/my-card-right-footer'



export default {
  name: 'myCardRight',
  components: {
    myCardRightHeader,
    myCardRightContentDesktop,
    myCardRightContentMobile,
    myCardRightContentFooter
  }
}
</script>

<style scoped>
</style>
