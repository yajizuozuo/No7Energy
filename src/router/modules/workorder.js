/** When your routing table is too long, you can split it into small modules **/

import layoutEnergy from '@/layoutEnergy'

const workorderRouter = {
  path: '/workorder',
  component: layoutEnergy,
  redirect: '/workorder/repair/repairComplete',
  name: 'Workorder',
  meta: {
    title: '工单',
    icon: 'nested'
  },
  children: [
    {
      path: 'repair',
      component: () => import('@/views/workorder/repair/index'), // Parent router-view
      name: 'Repair',
      meta: { title: '维修工单' },
      redirect: '/workorder/repair/repairComplete',
      children: [
        {
          path: 'repairComplete',
          component: () => import('@/views/workorder/repair/repairComplete/index'),
          name: 'repairComplete',
          meta: { title: '维修完成' }
        },
        {
          path: 'repairProcess',
          component: () => import('@/views/workorder/repair/repairProcess/index'),
          name: 'RepairProcess',
          meta: { title: '维修中' }
        }
      ]
    },
    {
      path: 'cancel',
      name: 'Cancel',
      component: () => import('@/views/workorder/cancel/index'),
      meta: { title: '工单撤销' }
    },
    {
      path: 'reserve',
      name: 'Reserve',
      component: () => import('@/views/workorder/reserve/index'),
      meta: { title: '预约工单' }
    },
    {
      path: 'orderDetail',
      name: 'OrderDetail',
      component: () => import('@/views/workorder/index'),
      meta: { title: '工单详情' }
    }
  ]
}

export default workorderRouter
