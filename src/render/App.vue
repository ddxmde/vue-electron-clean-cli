<template>
    <v-app id="app">
		<div class="text-center">
			<v-avatar fabs outlined color="blue"  size="80">
				<v-icon dark  size="40">mdi mdi-account-cash</v-icon>
			</v-avatar>
		</div>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
