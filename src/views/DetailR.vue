
<template>

 

<div class="card mb-3" style="max-width: 100%; " >
  <div class="p-3 mb-2 bg-dark text-white">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./HH.jpg" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><p class="fs-1">{{worker.Abilities}}</p></h5>
        <p class="fs-1" align="left">  Имя: {{worker.Name}}</p>
        <p class="fs-1" align="left">Возраст: {{worker.Age}}</p>
        <p class="fs-1" align="left">Доп. информация: {{worker.Description}}</p>
        <p class="fs-1" align="left">Номер: {{worker.Telephone}}</p>
      </div>
    </div>
  </div>
  </div>
  <button type="button" class="btn btn-secondary"  @click="$router.push('/resume')"> <b><i class="material-icons">Вернуться к списку резюме</i></b></button> 

</div>
</template>

<script>
export default {
name: 'detailR',
data: () => ({
worker: ''

}),
async mounted() {

  const id = this.$route.params.id
  const worker = await this.$store.dispatch('fetchResumeById', id)

 
 this.worker ={
   ...worker
 }

}

}
</script>

