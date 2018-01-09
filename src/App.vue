<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="haha">123</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'yes'
      }
    },
    methods: {
      haha() {
        this.$http.get('/api/a.txt')
          .then(res => {
            console.log(res);

          })
          .catch(e => {
            console.log(e);
          })
      }
    }
  }

</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

</style>
