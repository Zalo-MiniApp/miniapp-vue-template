import config from '../config'

const base = config.BASE_URL
let token: string;
export const saveToken = (value: string) => token = value;

export const request = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string, data?: any) => {
  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  while (!token) {
    await new Promise(resolve => setTimeout(resolve, 500))
  }
  headers.set('Authorization', `Bearer ${token}`)
  const url = new URL(`${base}/${path}`)
  if (method === 'GET') {
    url.search = new URLSearchParams(data).toString()
  }

  const options: RequestInit = {
    method: method,
    headers
  }
  if (method !== 'GET') {
    options.body = JSON.stringify(data)
  }

  return fetch(url.toString(), options)
}

export const getAppsByKeyword = async (keyword: string) => {
  try {
    const response = await (await request('GET', 'mini-store/search-app', { keyword })).json()
    if (!response.err) {
      return response.data.appsInfo
    } else {
      throw response.msg
    }
  } catch (error) {
    console.log('Error fetching apps by keyword. Details: ', error)
  }
}
