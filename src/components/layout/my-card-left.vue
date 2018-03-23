<template>
  <div class="myCardLeft col-lg-6 col-md-12 ml-auto mr-auto block">
    <div class="row">
      <div class="leftPart">
        <div class="borderReduce">
          <div class="reduce">
            <span>{{posts.prices.reduction}}</span>
          </div>
        </div>
        <img class="card-img-left img-fluid" src="../../../src/assets/pictures/image1.jpg" alt="Card image cap">
      </div>
    </div>
    <div class="row mt-3">
      <img src="../../../src/assets/pictures/miniature1.jpg" alt="logo miniature1" class="img-thumbnail">
      <img src="../../../src/assets/pictures/miniature2.jpg" class="img-thumbnail" alt="logo miniature2">
    </div>
  </div>
</template>

<script>
export default {
  props:['posts'],
  name: 'myCardLeft'
}
</script>

<style scoped>
/*gauche */
.img-fluid {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.img-thumbnail {
  border: none;
}

/* reduce */
.borderReduce{
  top:20px;
  margin-left: 20px;
  width: 80px;
  height: 80px;
  border: 3px solid #55A7B7;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
}
.reduce{
  top: 2px;
  left: 2px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #55A7B7;
  color: white;
  position: absolute;
  z-index: 3;
}
.reduce span{
  position: relative;
  top: 15px;
  margin-left: 5px;
  font-size: 25px;
}

</style>
