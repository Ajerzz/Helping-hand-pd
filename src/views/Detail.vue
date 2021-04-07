<template>

 

<div class="card mb-3" style="max-width: 100%; " >
  <div class="p-3 mb-2 bg-dark text-white">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./HH.jpg" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><p class="fs-1">{{record.Title}}</p></h5>
        <p class="fs-1" align="left">Описание: {{record.Description}}</p>
        <p class="fs-1" align="left">Адрес: {{record.Address}}</p>
        <p class="fs-1" align="left">Количество работников: {{record.CountP}}</p>
        <p class="fs-1" align="left">Имя: {{record.Name}}</p>
        <p class="fs-1" align="left">Номер: {{record.Telephone}}</p>
      </div>
    </div>
  </div>
  </div>
  <button type="button" class="btn btn-secondary"><li><router-link tag="li" to="/vacancies"><font color="white"><b>Вернуться к списку вакансий</b></font></router-link></li></button>
</div>
</template>

<script>
export default {
name: 'detail',
data: () => ({
record: ''

}),
async mounted() {

  const id = this.$route.params.id
  const record = await this.$store.dispatch('fetchRecordById', id)

 
 this.record ={
   ...record
 }

}

}
</script>

