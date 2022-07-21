import axios from "axios"

export default class HizmetService  {
    getHizmet(){
        return axios.get('http://localhost:8080/api/hizmet/getall')
    }
}