import axios from "axios";

export default class AuthService {
    static register = (userDto) => {
        // todo send request
        return axios.post('', userDto);
    }

    static login = (username, password) => {
        // return axios.post('', {username, password});
        return new Promise((resolve, reject) => resolve({data: {accessToken: '123'}}))
    }
}