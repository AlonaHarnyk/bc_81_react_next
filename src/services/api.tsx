import axios from 'axios'
import type { User } from '../types'
axios.defaults.baseURL = "https://6240d2109b450ae274385b44.mockapi.io/api"
export async function getUsers(){
  const {data} = await axios.get<User[]>('/users')
  return data
}