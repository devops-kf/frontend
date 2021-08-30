import axios from "axios";

export default class PostService {

    static publishPost(formData) {
        return axios.post('', formData);
    }

    static fetchUserPosts(userId) {
        return new Promise((resolve, reject) => resolve({data: [1,2,3]}))
    }
}