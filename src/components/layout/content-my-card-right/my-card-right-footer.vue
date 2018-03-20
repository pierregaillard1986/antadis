<template>
  <div class="myCardRightContentFooter container-fluid mt-5 align-items-end containerPrix">
    <div class="row justify-content-around">
      <div class="col-md-6 col-xs-12 row">
        <p class="col-12 prix text-center">140€</p>
        <p class="col-12 oldPrice text-center">au lieu de <strike>199,99€</strike></p>
      </div>
      <div class="col-md-6 col-xs-12">
        <button type="button" class="btn btn-lg">
          <i class="fas fa-cart-plus"></i>
            Ajouter au panier
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myCardRightContentFooter'
}
</script>

<style scoped>
/* partie prix */
.containerPrix{
  display: block;
}
/* bloc gauche */

.prix {
  font-size: 45px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  line-height: 1;
}

.oldPrice {
  color: #AFAFAF;
}
.oldPrice strike{
  color: black;
}

/* bloc droite */

.btn {
  background-color: black;
  color: #FEFEFE;
  border-radius: 0;
  height: 60px;
  font-style: italic;
}
</style>
