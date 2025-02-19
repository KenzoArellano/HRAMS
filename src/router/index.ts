import { createRouter, createWebHistory } from 'vue-router';
import AdminLoginPage from '@/page/Adminloginpage.vue'; // Login Page
import ApplicantPortal1 from '@/page/ApplicantPortal1.vue'; // Import your ApplicantPortal1 component

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: AdminLoginPage, // Login Page
  },
  {
    path: '/applicant-portal', // The new route for ApplicantPortal1
    name: 'ApplicantPortal1',
    component: ApplicantPortal1, // ApplicantPortal1 component
  },
  {
    path: '/',
    redirect: '/applicant-portal', // Redirect to ApplicantPortal1 initially
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
