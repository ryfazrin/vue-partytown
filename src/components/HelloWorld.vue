<template>
  <div class="hello">
    <input type="text"
      :class="{'error': hasErrors}"
      v-model="text">
    <p>Inputed Text: {{ text }}</p>
    <p>Reversed Text: {{ reverseText }}</p>
    <button @click="reverse">Reverse</button>
    <div>
      Has Errors : {{ hasErrors }}
    </div>
    <div>
      Answer: {{ answer }}
    </div>
    <img :src="answerImage" alt="">
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      text: '',
      reverseText: '',
      errors: [],
      answer: '',
      answerImage: ''
    }
  },
  computed: {
    hasErrors () {
      return this.errors.length > 0
    }
  },
  beforeCreate () {
    console.log('Before Create')
  },
  created () {
    console.log('Created')
  },
  mounted () {
    console.log('Mounted')
  },
  beforeDestroy () {
    console.log('Before Destroy')
  },
  destroyed() {
    console.log('Destroyed')
  },
  methods: {
    reverse() {
      if (!this.validate()) return
      this.reverseText = this.text.split('').reverse().join('')
    },
    validate() {
      this.errors = []
      if (!this.text) {
        this.errors.push('Must be filled')
        return false
      }
      if (this.text.length < 6) {
        this.errors.push('Must be more then 5 characters')
        return false
      }
      return true
    },
    getAnswer() {
      axios.get('https://yesno.wtf/api')
        .then((response) => {
          // console.log(response)
          const { answer, image } =  response.data
          this.answer = answer
          this.answerImage = image
        })
        .catch((error) => {
          console.log(error)
        })
    },
    debounceAnswer: _.debounce(function() {
      this.getAnswer()
    }, 500)
  },
  watch: {
    text() {
      if (!this.validate()) return
      this.answer = 'Loading...'
      this.debounceAnswer()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input.error {
  border: 1px solid red;
}
</style>
