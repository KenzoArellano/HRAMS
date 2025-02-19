import { createRouter, createWebHistory } from 'vue-router';
import AdminLoginPage from '@/page/Adminloginpage.vue'; // Login Page
import ApplicantPortal1 from '@/page/ApplicantPortal1.vue'; // ApplicantPortal1
import ApplicantPortal2 from '@/page/ApplicantPortal2.vue'; // ApplicantPortal2 (The next page after applying)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: AdminLoginPage,
  },
  {
    path: '/applicant-portal',
    name: 'ApplicantPortal1',
    component: ApplicantPortal1,
  },
  {
    path: '/applicant-portal2', // Add route for ApplicantPortal2
    name: 'ApplicantPortal2',
    component: ApplicantPortal2,
  },
  {
    path: '/',
    redirect: '/applicant-portal',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
