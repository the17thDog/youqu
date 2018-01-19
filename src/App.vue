<template>
	<div class="hello">
		<login></login>
		<!-- <button @click="haha">123</button> -->
	</div>
</template>

<script>
import Login from './pages/Login'

export default {
	data() {
		return {
		msg: 'yes'
		}
	},
	methods: {
		// haha() {
		//   this.$http.get('/api/a.txt')
		//     .then(res => {
		//       console.log(res);
		//     })
		//     .catch(e => {
		//       console.log(e);
		//     })
		// }
	},
	components: {
		login: Login
	}
}
</script>

<style lang="less">
@import url('./styles/base');
</style>
