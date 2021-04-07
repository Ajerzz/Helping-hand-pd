<template>
  <div>
  <div> <router-link to='/Home2'><h3><p align="right">Вернуться на начальную страницу</p></h3></router-link></div>
    <div class="page-title">
      <p class="fs-1"><b>Список ваканcий</b></p>
    </div>





    <p class="center" v-if="!records.length">
       На данный момент нет доступных вакансий.
      <router-link to="/addvacancy">Добавьте первую</router-link>
    </p>

    <section v-else>
      <HistoryTable :records="records" />
    </section>
  </div>
</template>

<script>
import HistoryTable from '@/components/HistoryTable'
import firebase from 'firebase/app'

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
    HistoryTable
  }
}
</script>