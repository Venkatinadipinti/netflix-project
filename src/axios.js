import axios from "axios"
import requests from './movieServies'
const instance=axios.create({
   baseURL:"https://api.themoviedb.org/3"
})
export default instance;