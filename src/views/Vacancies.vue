<template>
  <div>
   

  <div align="right"> <button type="button" class="btn btn-secondary"  @click="$router.push('/')"> <b><i class="material-icons">Выйти из аккаунта</i></b></button> </div>  
 
    <div class="page-title">
      <p class="fs-1"><b>Список ваканcий</b></p>
      <loader v-if="loading"/>

    </div>




    <p class="center" v-if="!records.length">
      
       На данный момент нет доступных вакансий.
      <router-link to="/addvacancy">Добавьте первую</router-link>
    </p>

    <section v-else>
      <HistoryTable :records="records" />
    </section>
    
    <div align="center"> <button type="button" class="btn btn-primary"  @click="$router.push('/Home2')"> <b><i class="material-icons">Вернуться на начальную страницу</i></b></button>  </div>  
   
  </div>
</template>

<script>
import HistoryTable from '@/components/HistoryTable'
import firebase from 'firebase/app'
import Loader from '@/components/Loader'


export default {
  name: 'history',
  data: () => ({
    loading: true,
    records: [],

  }),
  async mounted() {
    // this.records = await this.$store.dispatch('fetchRecords')
    const records = await this.$store.dispatch('fetchRecords')

    this.records = records.map(record => {
      return {
        ...record,

      }
    })
    this.loading = false
  },
  components: {
    HistoryTable,
    Loader
  }
}
</script>