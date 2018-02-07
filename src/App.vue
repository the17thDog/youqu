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
		// var a =  this.sleep(20);
		// var b =  this.sleep(39)
		// console.log(a)
		// var c =  await a + await b;
		// console.log(c)
	}
}
</script>

<style lang="less">
@import url('./styles/base');
</style>
