
<template>
<div class="myCardRightContentDesktop">
  <nav class="d-lg-block">
    <div class="nav nav-tabs justify-content-around row" id="nav-tab" role="tablist">
      <a class="nav-item nav-link active col-4" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Description</a>
      <a class="nav-item nav-link col-4" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Caractérisques</a>
      <a class="nav-item nav-link col-4" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Plus d'infos</a>
    </div>
  </nav>
  <div class="tab-content mt-3 d-lg-block" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <p class="lead">Issu d’un petit élevage familial, visite sur place pour réservation. Petit monstre de race 100 % certifié avec puce électronique, son carnet de santé est à jour et en règle. Ce petit monstre attend votre adoption contre amour, bons soins et beaucoup
        de câlins !<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra ex sit amet dolor aliquet faucibus consequat ac ex. Aenean enim dui, molestie nec nisl sit amet, molestie bibendum est. Vivamus ligula tellus, mattis non
        porttitor eget, eleifend eget tortor. Praesent fringilla vitae nisl et tempus. Nulla ornare nulla volutpat erat blandit finibus. Integer et lacus ut arcu vestibulum eleifend.</p>
    </div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
      <table>
        <tbody>
          <tr>
            <th scope="row" class="pr-3">Poids</th>
            <td class="pl-5 borderLeftTable">90 g</td>
          </tr>
          <tr class="borderTable">
            <th scope="row" class="pr-3">Couleur(s)</th>
            <td class="pl-5 borderLeftTable">Bleu, jaune et orange</td>
          </tr>
          <tr>
            <th scope="row" class="pr-3">Caractère</th>
            <td class="pl-5 borderLeftTable">Sympathique</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra ex sit amet dolor aliquet faucibus consequat ac ex. Aenean enim dui, molestie nec nisl sit amet, molestie bibendum est. Vivamus ligula tellus, mattis non porttitor eget, eleifend
        eget tortor. Praesent fringilla vitae nisl et tempus. Nulla ornare nulla volutpat erat blandit finibus. Integer et lacus ut arcu vestibulum eleifend.</p>
    </div>
  </div>
  <!-- affichage mobile -->
  <div class="column d-lg-none">
    <div class="pt-3">
      <h2 class="backgroundCategories pl-4">Description</h2>
      <p class="lead">Issu d’un petit élevage familial, visite sur place pour réservation. Petit monstre de race 100 % certifié avec puce électronique, son carnet de santé est à jour et en règle. Ce petit monstre attend votre adoption contre amour, bons soins et beaucoup
        de câlins !<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra ex sit amet dolor aliquet faucibus consequat ac ex. Aenean enim dui, molestie nec nisl sit amet, molestie bibendum est. Vivamus ligula tellus, mattis non
        porttitor eget, eleifend eget tortor. Praesent fringilla vitae nisl et tempus. Nulla ornare nulla volutpat erat blandit finibus. Integer et lacus ut arcu vestibulum eleifend.</p>
    </div>
    <div class="pt-3">
      <h2 class="backgroundCategories pl-4">Caractérisques</h2>
      <div class="row pb-3">
        <p class="col-12 mb-0 colorP">Poids :</p>
        <p class="col-12 mb-0 colorP">90 g</p>
      </div>
      <div class="row pb-3">
        <p class="col-12 mb-0 colorP">Couleur(s)</p>
        <p class="col-12 mb-0 colorP">Bleu, jaune et orange</p>
      </div>
      <div class="row pb-3">
        <p class="col-12 mb-0 colorP">Caractère</p>
        <p class="col-12 mb-0 colorP">Sympathique</p>
      </div>
    </div>
    <div class="pt-3">
      <h2 class="backgroundCategories pl-4">Plus d'info</h2>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra ex sit amet dolor aliquet faucibus consequat ac ex. Aenean enim dui, molestie nec nisl sit amet, molestie bibendum est. Vivamus ligula tellus, mattis non porttitor eget, eleifend
        eget tortor. Praesent fringilla vitae nisl et tempus. Nulla ornare nulla volutpat erat blandit finibus. Integer et lacus ut arcu vestibulum eleifend.</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'myCardRightContentDesktop'
}
</script>

<style scoped>
/* partie centrale droite */
/* mobile view */
.backgroundCategories{
  background-color: #D3D3D3;
  color:#989898;
}
.colorP{
  color: #BCBCBC;
}
/* barre d'onglet */
.nav{
  margin: auto;
}
.nav-tabs {
  border-bottom: 5px solid #D3D3D3 !important;
}

.nav-tabs a {
  color: #989898 !important;
}

.nav-tabs .active {
  background-color: #D3D3D3 !important;
  border: none;
  border-radius: 0px;
}
/* description et plus d'info */
p.lead {
  font-size: 16px;
  color: #BCBCBC !important;
  text-align: justify;
  margin: auto;
  padding: auto;
}
/* caracteristiques */
table, tbody, tr{
  width: 100%;
}
th, td{
  font-weight: normal;
  color: #BCBCBC;
  line-height: 2.7;
}
.borderTable{
  border-top: 2px solid #BCBCBC;
  border-bottom: 2px solid #BCBCBC;
}
.borderLeftTable{
  border-left: 2px solid #BCBCBC;
}
</style>
