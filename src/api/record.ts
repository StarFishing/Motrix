import axios from 'axios'
const baseUrl = 'http://localhost:3000/'
export function reportBehavior(content: string): Promise<any> {
  return axios.post(
    baseUrl + 'report',
    {
      content,
    },
    {
      headers: { 'Content-type': 'application/json' },
    }
  )
}
export function getBehaviors(): Promise<any> {
  return axios.get(baseUrl + 'actions')
}
