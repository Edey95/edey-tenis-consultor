/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'Rankings',
    icon: 'table'
  },
  children: [
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: 'Ranking Masculino' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: 'Femenino Ranking' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: 'Ranking Mixto' }
    },
    {
      path: 'complex-tables',
      component: () => import('@/views/table/complex-tables'),
      name: 'ComplexTables',
      meta: { title: 'Ranking Parejas' }
    }
  ]
}
export default tableRouter
