<template>
  <div>
    <h2>
      Доступные вакансии
    </h2>
    <hr>
    <select v-model="filterRegion">
      <option value="Выберите район">Выберите район</option>
      <option value="Ворошиловский">Ворошиловский</option>
      <option value="Железнодорожный">Железнодорожный</option>
      <option value="Кировский">Кировский</option>
      <option value="Ленинский">Ленинский</option>
      <option value="Октябрьский">Октябрьский</option>
      <option value="Первомайский">Первомайский</option>
      <option value="Пролетарский">Пролетарский</option>
      <option value="Советский">Советский</option>
    </select>
    <hr>
    <select v-model="filterWorkers">
      <option value="Выберите количество человек">Выберите количество человек</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5 и более">5 и более</option>
    </select>
    <hr>
    <h2>Список вариантов</h2>
    <Loader v-if="loading" />
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    /> <!--Dobavit filter filteredTodos2 -->
    <p v-else>Извините, мы не смогли найти подходящие варианты</p>
    <li>Чтобы скрыть ненужные варианты вы можете нажать на крестик справа от объявления.
      <router-link to="/">Выйти на главную</router-link>
      <h4>
        <img src="./HH.jpg" alt="альтернативный текст" width="400" height="300">
      </h4>
    </li>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'

export default {
  name: 'app',
  data() {
    return {
      todos: [
        { id: 0, title: "Требуется грузчик", rayon: "Ворошиловский", workers: 4 },
        { id: 1, title: "Найму выгульщика для собак", rayon: "Октябрьский", workers: 2 },
        { id: 2, title: "Ищу специалиста в ремонте", rayon: "Кировский", workers: 1 },
        { id: 3, title: "Требуется слесарь", rayon: "Железнодорожный", workers: 1 },
        { id: 4, title: "Требуется сварщик", rayon: "Ворошиловский", workers: 3 },
        { id: 5, title: "Требуется Сиделка", rayon: "Октябрьский", workers: 4 },
        { id: 6, title: "Ищу бригаду строителей ", rayon: "Советский", workers: 3 },
        { id: 7, title: "Требуется специалист по клинингу", rayon: "Железнодорожный", workers: 2 }]
      ,
      loading: false,
      filterRegion: 'Выберите район',
      filterWorkers: 'Выберите количество человек'
    }
  },
  computed: {
    filteredTodos() {
      return this.todos
          .filter(t => this.filterRegion === 'Выберите район' || t.rayon === this.filterRegion)
          .filter(t => this.filterWorkers === 'Выберите количество человек' || t.workers == this.filterWorkers);
    },
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },
  components: {
    TodoList, AddTodo, Loader
  }
}
</script>

<style scoped>
select {
  display: inline;
  border-right: 500px;
  border-color: brown;

}
</style>
