import { createRouter, createWebHistory } from "vue-router";
// import { createPinia } from "pinia";
// Import your components
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Service from "@/views/Service.vue";
import WhyUs from "@/views/WhyUs.vue";
import Team from "@/views/Team.vue";
import RegistrationForm from "@/views/RegistrationForm.vue";
import Users from "@/views/Users.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/signup.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/service", component: Service },
  { path: "/why-us", component: WhyUs },
  { path: "/team", component: Team },
  { path: "/register", component: RegistrationForm },
  { path: "/user", component: Users },
  { path: "/login", component: Login },
  { path: "/SignUp", component: SignUp },
];

// const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes,
  //linkActiveClass: 'active',
  //linkExactActiveClass: 'active',
});
export default router;
