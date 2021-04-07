<template>
<div>
<div> 
<button type="button" class="btn btn-primary"><b><i><router-link to="/addresume"><font color="white"><p class="fs-3">Добавить резюме</p></font></router-link></i></b></button></div>
  <table class="table">
  <thead class="table-dark">
  
    <tr>
      <th>#  </th>
      <th>Имя</th>
      <th>Род деятельности</th>
      <th>Возраст</th>
      <th>Открыть</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(worker, idx) of workers" :key="worker.id">
      <td>{{ idx + 1 }}</td>
      <td>{{ worker.Name }}</td>
      <td>{{ worker.Abilities}}</td>
      <td>{{ worker.Age}}</td>
      <!-- <td>{{ record.categoryName }}</td> -->
      <!-- <td>
        <span 
          :class="[record.typeClass]"
          class="white-text badge"
        >{{ record.typeText }}</span>
      </td> -->
      <td>
        <button type="button" class="btn btn-success"  @click="$router.push('/detailR/' + worker.id)"> <b><i class="material-icons">Подробно</i></b></button>
      </td>

    </tr>
  </tbody>
</table>

 
  </div>
</template>

<script>
export default {
  props: {
    workers: {
      required: true,
      type: Array
    }
  }
}
</script>