<template>
	<div>
		<div>{{name}}</div>
		<input v-model="name" />
		<button @click="setFe()">setFe</button>
		<p>这里是Vue2.0{{fe}}</p>
		<router-link to="/foo/a/1">Go to a</router-link>
		<router-link to="/foo/b/2">Go to b</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
	module.exports = {
		data: function() {
			return {
				name: 'foo'
			}
		},
		computed:{
			//this.$http
			//this.$store
			//this.$route
			fe:function(){
				return this.$store.state.name
			}
		},
		methods:{
			setFe:function(){
				this.$store.commit("set_fe",this.name)
			}
		}
	}
</script>
<style scoped>
	div {
		color: red;
	}
</style>