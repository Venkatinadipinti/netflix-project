import axios from "axios"
const instance=axios.create({
    baseURL:"https://online-movie-database.p.rapidapi.com/auto-complete ",
})
export default instance;