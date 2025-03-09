import { createRouter, createWebHistory } from 'vue-router';
import Admindashboardpage from '@/page/Admindashboardpage.vue';
import History from '@/page/History.vue';
import Denied1 from '@/page/Denied1.vue';
import Archived1 from '@/page/Archived1.vue';
import Hired1 from '@/page/Hired1.vue';
import Approve1 from '@/page/Approve1.vue';
import Dashboard1 from '@/page/Dashboard1.vue';
import Dashboard2 from '@/page/Dashboard2.vue';
import ChooseUser from '@/page/ChooseUser.vue';
import AdminLoginPage from '@/page/Adminloginpage.vue';
import OfficeHeadsLoginPage from '@/page/OfficeHeadsLoginPage.vue';
import ApplicantPortal1 from '@/page/ApplicantPortal1.vue';
import ApplicantPortal2 from '@/page/ApplicantPortal2.vue';

const routes = [
  {
    path: '/',
    name: 'Applicantdashboardpage',
    component: Admindashboardpage,
  },
  {
    path: '/',
    name: 'History',
    component: History,
  },
  {
    path: '/',
    name: 'Denied1',
    component: Denied1,
  },
  {
    path: '/',
    name: 'Archived1',
    component: Archived1,
  },
  {
    path: '/',
    name: 'Hired1',
    component: Hired1,
  },
  {
    path: '/',
    name: 'Approve1',
    component: Approve1,
  },
  {
    path: '/',
    name: 'Dashboard2',
    component: Dashboard2,
  },
  {
    path: '/',
    name: 'Dashboard1',
    component: Dashboard1, 
  },
  {
    path: '/',
    name: 'ChooseUser',
    component: ChooseUser,
  },
  {
    path: '/admin-login',
    name: 'AdminLoginPage',
    component: AdminLoginPage, // Used by Admin
  },
  {
    path: '/office-heads-login',
    name: 'OfficeHeadsLoginPage',
    component: OfficeHeadsLoginPage, // Used by Office Heads
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
