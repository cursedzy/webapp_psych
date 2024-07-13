import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePSY.vue';
import TestForm from '../components/TestForm.vue';
import Results from '../views/ResultsPSY.vue';
//import Materials from '../views/Materials.vue';
import About from '../views/AboutPSY.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: TestForm
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
  //{
  //  path: '/materials',
  //  name: 'Materials',
  //  component: Materials
  //},
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;