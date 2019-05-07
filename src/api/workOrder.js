import request from '@/utils/request'

export function orderDetail(data) {
  return request({
    url: '/api/order/detail',
    method: 'post',
    data
  })
}

export function getOrderList(data) {
  return request({
    url: '/api/seatMmb/order/repairList',
    method: 'post',
    data
  })
}
