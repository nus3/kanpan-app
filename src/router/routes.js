import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModalView from '@/components/templates/KbnTaskDetailModalView.vue'

export default [
  {
    path: '/',
    component: KbnBoardView,
    meta: { requireAuth: true }
  },
  {
    path: '/login',
    component: KbnLoginView
  },
  {
    path: '/tasks/:id',
    component: KbnTaskDetailModalView,
    meta: { requireAuth: true }
  },
  {
    path: '*',
    redirect: '/'
  }
]
