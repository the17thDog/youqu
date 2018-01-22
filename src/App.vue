<template lang='pug'>
	home(v-if='this.$route.path =="/home"')
	login(v-else)
</template>

<script>
import Login from './pages/Login'
import Home from './pages/Home'

export default {
	data() {
		return {
			// siLogin
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
		login: Login,
		home: Home
	},
	mounted () {
		
	}
}
</script>

<style lang="less">
@import url('./styles/base');
</style>
