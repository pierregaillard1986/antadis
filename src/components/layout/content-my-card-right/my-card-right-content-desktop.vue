
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
      <p class="lead" v-html="posts.description"></p>
    </div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
      <table>
        <tbody>
          <tr v-for="item in posts.attributes">
            <th scope="row" class="pr-3">{{item.name}}</th>
            <td class="pl-5 borderLeftTable">{{item.value}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
      <p class="lead" v-html="posts.more_info"></p>
    </div>
  </div>
  <!-- affichage mobile -->
  <div class="column d-lg-none">
    <div class="pt-3">
      <h2 class="backgroundCategories pl-4">Description</h2>
      {{posts.description}}
    </div>
    <div class="pt-3">
      <h2 class="backgroundCategories pl-4">Caractérisques</h2>
      <div class="row pb-3" v-for="item in posts.attributes">
        <p class="col-12 mb-0 colorP">{{item.name}}</p>
        <p class="col-12 mb-0 colorP">{{item.value}}</p>
      </div>
    </div>
    <div class="pt-3">
      <h2 class="backgroundCategories pl-4">Plus d'info</h2>
      {{posts.more_info}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:['posts'],
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
