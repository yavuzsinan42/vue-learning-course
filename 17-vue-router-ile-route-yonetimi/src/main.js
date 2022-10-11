import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'


Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to,from, savedPosition){
    if(to.hash){ //Eğer gidilen sayfada bir hash varsa
      return {
        selector : to.hash //hash'de yer alan id'li elementin konumunu alır
      }
    }
    //return { x: 0, y: 800 }
  }
})

router.beforeEach((to,from,next)=>{
  console.log("Global olarak kontrol!!!");
  next()
})
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
