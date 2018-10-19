import request from '@/util/request'
import { message } from 'antd'

export async function getDataService (config, params){
  const res = await request({
    url: config.url,
    method: 'get',
    data: { ...params, random: new Date().getTime() }
  })
  return res;
}

export async function postDataService (config, params){
  const res = await request({
    url: config.url,
    method: 'post',
    data: params
  })
  return res;
}
