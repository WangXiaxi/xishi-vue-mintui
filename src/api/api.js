import axios from 'axios'
import {URL} from './config'

export function getBanner () { // 首页获取轮播
  const url = URL + '/api/getBanner'
  const data = Object.assign({}, {
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getHomeNews () { // 首页获取新闻
  const url = URL + '/api/getHomeNews'
  const data = Object.assign({}, {
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getHomeTicket () { // 首页获取门票
  const url = URL + '/api/getTicket'
  const data = Object.assign({}, {
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    res.data.data = (res.data.data).slice(0, 4)
    return Promise.resolve(res.data)
  })
}

export function getHomeScenicArea () { // 首页获取门票
  const url = URL + '/api/getScenicArea'
  const data = Object.assign({}, {
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    res.data.data = (res.data.data).slice(0, 4)
    return Promise.resolve(res.data)
  })
}

export function getHomeStrategy (page) { // 首页获取门票
  const url = URL + '/api/getStrategy'
  const data = Object.assign({}, {
    page: page,
    limit: 5
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
