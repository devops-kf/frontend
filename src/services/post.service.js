import axios from "axios";

export default class PostService {

    static publishPost(formData) {
        return axios.post('', formData);
    }
}