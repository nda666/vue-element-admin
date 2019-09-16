import request from '@/utils/request'
import defaultSettings from '@/settings'

const { apiUrl } = defaultSettings

export function login(data) {
  return request({
    url: apiUrl + '/auth',
    method: 'post',
    data
  })
}

export function fetchList(query) {
  return request({
    url: apiUrl + '/auth',
    method: 'post',
    params: query
  })
}

export function getInfo(token) {
  return request({
    url: apiUrl + '/user/info',
    method: 'get',
    headers: { 'Authorization': 'bearer ' + token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
