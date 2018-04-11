import Vue from 'vue'
import Buefy from 'buefy'
import ElementUI from 'element-ui';

import 'buefy/lib/buefy.css'
import 'element-ui/lib/theme-chalk/index.css';
import "font-awesome/css/font-awesome.css";
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome/styles.css'
Vue.use(ElementUI);
Vue.use(Buefy, {
  defaultIconPack: 'fa',
})

import Grid from 'vue-js-grid';
Vue.use(Grid);

import App from './App.vue'
import router from './router'
import store from './store'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, concat, from } from "apollo-link";
import { onError } from "apollo-link-error";
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'unfetch';
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_URL,
  fetch
})

const logoutLink = onError(({ networkError }) => {
  if (networkError.statusCode === 403) {
    localStorage.removeItem("token");
    window.location.reload();
  }
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token") || null;
  let authorization = null;
  if (token) {
    authorization = "JWT " + token;
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization
      }
    }));
  }
  return forward(operation);
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: logoutLink.concat(authMiddleware.concat(httpLink)),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "loading"
  }
});

// Install the vue plugin
Vue.use(VueApollo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
