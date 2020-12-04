<template>
  <li>
    <span >
      <strong>{{todo.title | uppercase}} {{","}}</strong>
      {{" район -"}}
      {{todo.rayon | lowercase}}
      {{", количество работников -"}}
      {{todo.workers }}
    </span>
    <button class="rm"
            v-on:click="$emit('remove-todo', todo.id)"
    >&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
    
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    },
    lowercase(value)
    {
      return value.toLowerCase()
    }
  }
}
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }

  .rm {
    background: rgb(248, 7, 7);
    color: rgb(245, 239, 239);
    border-radius:100%;
    font-weight: bold;
  }

  input {
    margin-right: 1rem;
  }

  .done {
    text-decoration: line-through;
  }
</style>