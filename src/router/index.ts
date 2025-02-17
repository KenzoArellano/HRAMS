import { createRouter, createWebHistory } from 'vue-router';
import AdminLoginPage from '@/page/Adminloginpage.vue'; // Login Page


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: AdminLoginPage, // Login Page
  },

  {
    path: '/',
    redirect: '/login', // Redirect to login initially
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
