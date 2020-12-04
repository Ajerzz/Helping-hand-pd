<template>
  <div>
    
    
    <h2>
      Список Резюме
    </h2>
    
    <hr>
    <select v-model="filter">
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
    <select v-model="filter2">
      <option value="Выберите количество работников">Выберите количество работников</option>
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
        
    /> 
    
    <!--Dobavit filter filteredTodos2 -->
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
      {id: 0, title: "Занимаюсь чисткой компьютеров и ноутбуков", rayon: "Ворошиловский", workers: 1 },
      {id: 1, title: "Репетитор по математике", rayon: "Октябрьский", workers: 1},
      {id: 2, title: "Мойщики окон", rayon: "Кировский", workers: 2},
      {id: 3, title: "Нянька", rayon: "Железнодорожный", workers: 1},
      {id: 4, title: "Личный водитель", rayon: "Ворошиловский"  , workers: 1},
      {id: 5, title: "Бригада строителей", rayon: "Октябрьский", workers: 4}
     ]
      ,
      loading: false,
      filter: 'Выберите район',
      filter2: 'Выберите количество человек'
    }
  },
  
  computed: {
    filteredTodos() {
      if (this.filter === 'Выберите район') {
        return this.todos
      }

      if (this.filter === 'Ворошиловский') {
        return this.todos.filter(t => t.rayon==="Ворошиловский")
      }

      if (this.filter === 'Железнодорожный') {
        return this.todos.filter(t => t.rayon==="Железнодорожный")
      }
       if (this.filter === 'Кировский') {
        return this.todos.filter(t => t.rayon==="Кировский")
      }

      if (this.filter === 'Ленинский') {
        return this.todos.filter(t => t.rayon==="Ленинский")
      }
       if (this.filter === 'Октябрьский') {
        return this.todos.filter(t => t.rayon==="Октябрьский")
      }

      if (this.filter === 'Первомайский') {
        return this.todos.filter(t => t.rayon==="Первомайский")
      }
       if (this.filter === 'Пролетарский') {
        return this.todos.filter(t => t.rayon==="Пролетарский")
      }

      if (this.filter === 'Советский') {
        return this.todos.filter(t => t.rayon==="Советский")
      }
    },
    filteredTodos2() {
      if (this.filter2 === 'Выберите количество работников') {
        return this.todos
      }

      if (this.filter2 === '1') {
        return this.todos.filter(t => t.workers===1)
      }

      if (this.filter2 === '2') {
        return this.todos.filter(t => t.workers===2)
      }
       if (this.filter2 === '3') {
        return this.todos.filter(t => t.workers===3)
      }

      if (this.filter2 === '4') {
        return this.todos.filter(t => t.workers===4)
      }
       if (this.filter2 === '5 и более') {
        return this.todos.filter(t => t.workers>=5)
      }

    
    }

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
