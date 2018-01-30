import axios from 'axios'
import {URL} from './config'

export function getBanner () {
  const url = URL + '/api/getBanner'
  const data = Object.assign({}, {
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getHomeNews () {
  const url = URL + '/api/getHomeNews'
  const data = Object.assign({}, {
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
