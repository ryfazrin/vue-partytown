<template>
  <div class="todo-app">
    <h1>What's your plan today?</h1>

    <TodoForm @submit="addTodo" />
    
    <TodoList :todos="todos" 
      @deleteTodo="deleteTodo" 
      @complete="completeTodo" 
      @submitUpdate="updateTodo" />
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export default {
  name: 'HomeView',
  components: {
    TodoForm,
    TodoList
  },
  data() {
    return {
      todos: [
        { id: 1, text: 'beli minyak goreng', isCompleted: false },
        { id: 2, text: 'todo 2', isCompleted: false },
        { id: 3, text: 'todo 3', isCompleted: false },
        { id: 4, text: 'todo 4', isCompleted: false },
        { id: 5, text: 'todo 5', isCompleted: true },
      ]
    }
  },
  methods: {
    addTodo (newTodo) {
      if (!newTodo.text) return
      this.todos = [newTodo, ...this.todos]
    },
    deleteTodo (todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId)
    },
    completeTodo (todoId) {
      this.todos = this.todos.map(todo => {
        if (todo.id === todoId) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    },
    updateTodo(todoId, newTodo) {
      if (!newTodo) return
      this.todos = this.todos.map(todo => {
        if (todo.id === todoId) {
          todo.text = newTodo.text
        }
        return todo
      })
    }
  },
}
</script>
