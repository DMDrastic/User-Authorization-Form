import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UnauthorizedView from '../views/UnauthorizedView.vue'
import { supabase } from '../clients/supabase'

let localUser;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  HomeView 
    },
    {
      path: '/secret',
      name: 'secret',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SecretView.vue'),
      meta: { requiresAuth: true }
    },
	{
    path: '/login',
	  name: 'login',
	  component: LoginView
	},
	{
		path:'/unauthorized',
		name: 'unauthorized',
		component: UnauthorizedView
	}
  ]
})

//getUser
async function getUser(next){
  localUser = await supabase.auth.getSession();
  if(localUser.data.session == null){
    next("/unauthorized");
  } else{
    next();
  }
}
//auth requirements
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    getUser(next);
  }
  else{
    next();
  }
})

export default router
