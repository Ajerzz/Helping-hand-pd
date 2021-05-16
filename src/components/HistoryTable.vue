<template>
<div>
<div> 
   <button type="button" class="btn btn-primary"  @click="$router.push('/addvacancy')"> <b><p class="fs-3">Добавить вакансию</p></b></button>
</div>
  <table class="table">
  <thead class="table-dark">
  
    <tr>
      <th>#  </th>
      <th>Название вакансии</th>
      <th>Количество человек</th>
      <th>Адрес</th>
      <th>Открыть</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(record, idx) of records" :key="record.id">
      <td>{{ idx + 1 }}</td>
      <td>{{ record.Title }}</td>
      <td>{{ record.CountP}}</td>
      <td>{{ record.Address}}</td>
      <!-- <td>{{ record.categoryName }}</td> -->
      <!-- <td>
        <span 
          :class="[record.typeClass]"
          class="white-text badge"
        >{{ record.typeText }}</span>
      </td> -->
      <td>
        <button type="button" class="btn btn-success"  @click="$router.push('/detail/' + record.id)"> <b><i class="material-icons">Подробно</i></b></button>
      </td>

    </tr>
  </tbody>
</table>

 
  </div>
</template>


<script>
export default {
  props: {
    records: {
      required: true,
      type: Array
    }
  }
}
</script>