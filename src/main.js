import Vue from 'vue'
import App from './App.vue'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// HTTP connection to the API
const httpLink = createHttpLink({
	uri: 'https://pangaea-interviews.now.sh/api/graphql',
})

//Cache implementation
const cache = new InMemoryCache()

//Apollo client creation
const apolloClient = new ApolloClient({
	link: httpLink,
	cache,
})

//Appollo provider
const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
})

Vue.config.productionTip = false
Vue.use(VueApollo)

new Vue({
	el: '#app',
	apolloProvider,
  render: h => h(App),
}).$mount('#app')
