<template>
  <form class="todo-form" @submit.prevent="handleSubmit">
    <input
      type="text"
      class="todo-input"
      v-model="text"
      ref="input"
      placeholder="Add new todo here..."
    />
    <button class="todo-button">{{ actionLabel }}</button>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  props: {
    editData: {
      type: Object,

    },
  },
  data() {
    return {
      text: this.editData ? this.editData.text : '',
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  computed: {
    placeholderText () {
      return this.editData ? 'Update your todo' : 'Add your new todo'
    },
    actionLabel () {
       return this.editData ? 'Update' : 'Add new todo'
    }
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", {
        id: Math.floor(Math.random() * 10000),
        text: this.text,
      })
      this.resetForms
    },
  },
  resetForms() {
    this.text = ''
  }
}
</script>

<style>
</style>