<template>
  <div>
  <div> <router-link to='/Home2'><h3><p align="right">Вернуться на начальную страницу</p></h3></router-link></div>
    <div class="page-title">
      <p class="fs-1"><b>Список резюме</b></p>
    </div>
    
    <p class="center" v-if="!workers.length">
      На данный момент нет доступных резюме. 
      <router-link to="/addresume">Добавьте первое</router-link>
    </p>

    <section v-else>
      <HistoryRTable :workers="workers" />
    </section>
  </div>
</template>

<script>
import HistoryRTable from '@/components/HistoryRTable'


export default {
  name: 'historyR',
  data: () => ({
    loading: true,
    workers: [],

  }),
  async mounted() {
    // this.records = await this.$store.dispatch('fetchRecords')
    const workers = await this.$store.dispatch('fetchResume')

    this.workers = workers.map(worker => {
      return {
        ...worker,

      }
    })
    this.loading = false
  },
  components: {
    HistoryRTable
  }
}
</script>