import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import Index from '../components/siswa/IndexSiswa.vue'
import Halaman from '../components/buku/HalamanBuku.vue'
import TambahSiswa from '../components/siswa/TambahSiswa.vue'
import EditSiswa from '../components/siswa/EditSiswa.vue'
import TambahBuku from '../components/buku/TambahBuku.vue'
import EditBuku from '../components/buku/EditBuku.vue'
import PeminjamanView from '../components/transaksi/PeminjamanView.vue'
import TambahPeminjaman from '../components/transaksi/TambahPeminjaman.vue'
import LoginView from '../components/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/siswa',
    name: 'Index',
    component: Index,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/buku',
    name: 'Halaman',
    component: Halaman,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/tambahsiswa',
    name: 'TambahSiswa',
    component: TambahSiswa,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editsiswa/:id',
    name: 'EditSiswa',
    component: EditSiswa,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/tambahbuku',
    name: 'TambahBuku',
    component: TambahBuku,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editbuku/:id',
    name: 'EditBuku',
    component: EditBuku,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/peminjaman',
    name: 'PeminjamanView',
    component: PeminjamanView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/peminjaman/tambah',
    name: 'TambahPeminjaman',
    component: TambahPeminjaman,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('auth')) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})

export default router

