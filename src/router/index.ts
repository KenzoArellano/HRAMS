import { createRouter, createWebHistory } from 'vue-router';
import ChooseUser from '@/page/ChooseUser.vue';
import AdminLoginPage from '@/page/AdminLoginPage.vue';
import ApplicantPortal1 from '@/page/ApplicantPortal1.vue';
import ApplicantPortal2 from '@/page/ApplicantPortal2.vue';

const routes = [
  {
    path: '/',
    name: 'ChooseUser',
    component: ChooseUser,
  },
  {
    path: '/admin-login',
    name: 'AdminLoginPage',
    component: AdminLoginPage, // Used by both HR Admin & Office Heads
  },
  {
    path: '/applicant-portal',
    name: 'ApplicantPortal1',
    component: ApplicantPortal1,
  },
  {
    path: '/applicant-portal2',
    name: 'ApplicantPortal2',
    component: ApplicantPortal2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
