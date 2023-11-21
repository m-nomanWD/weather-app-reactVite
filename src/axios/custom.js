import axios from 'axios'
const authFetch = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})
export default authFetch
