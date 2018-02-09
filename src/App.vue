<template lang='pug'>
	router-view
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
		// async haha () {
		// 	var a = await Promise.reject(111)
		// 	return a;
		// },

		// sleep (x) {
		// 	return new Promise ((resolve, reject) => {
		// 		setTimeout(() => {
		// 			resolve(x)
		// 		}, 2000);
		// 	})
		// }
	},
	components: {
		login: Login,
		home: Home
	},
	mounted () {
		console.log(eventBus)
	}
}
</script>

<style lang="less">
@import url('./styles/base');
@import url('//at.alicdn.com/t/font_552741_aq7n3ihaohe0cnmi.css');
</style>
