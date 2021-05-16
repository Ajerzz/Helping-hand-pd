<template>
  <div>
    <div align="right"> <button type="button" class="btn btn-secondary"  @click="$router.push('/')"> <b><i class="material-icons">Выйти из аккаунта</i></b></button>  </div> 
  
    <div class="page-title">
      <p class="fs-1"><b>Список резюме</b></p>
     <loader v-if="loading"/>
    </div>

    <p class="center" v-if="!workers.length">
      На данный момент нет доступных резюме. 
      <router-link to="/addresume">Добавьте первое</router-link>
    </p>

    <section v-else>
      <HistoryRTable :workers="workers" />
    </section>
 <div align="center"> <button type="button" class="btn btn-primary"  @click="$router.push('/Home2')"> <b><i class="material-icons">Вернуться на начальную страницу</i></b></button>  </div>  
     

  </div>
</template> 

<script>
import HistoryRTable from '@/components/HistoryRTable'
import Loader from '@/components/Loader'


export default {
  name: 'historyR',
  data: () => ({
    loading: true,
    workers: [],

  }),
  async mounted() {
    
    const workers = await this.$store.dispatch('fetchResume')

    this.workers = workers.map(worker => {
      return {
        ...worker,

      }
    })
    this.loading = false
  },
  components: {
    HistoryRTable,
    Loader
  }
}
</script>