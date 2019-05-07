import request from '@/utils/request'

export function orderDetail(data) {
  return request({
    url: '/order/detail',
    method: 'post',
    data
  })
}
// 已完成维修工单列表
export function repairCompleteList(data) {
  return request({
    url: '/order/repairCompleteList',
    method: 'post',
    data
  })
}
// 已撤销工单列表
export function cancelList(data) {
  return request({
    url: '/order/cancelList',
    method: 'post',
    data
  })
}
// 处理中维修工单列表
export function repairProcessList(data) {
  return request({
    url: '/order/repairProcessList',
    method: 'post',
    data
  })
}
