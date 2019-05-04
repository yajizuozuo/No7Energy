import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/seatMmb/centerLogin',
    method: 'post',
    data
  })
}
export function getImage() {
  return request({
    url: '/api/authImage/getImage',
    method: 'post'
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
