export default class LocalStorageService {
    static getLocalStorageItem(key) {
        return localStorage.getItem(key);
    }

    static setLocalStorageItem(key, value) {
        localStorage.setItem(key, value);
    }

    static removeLocalStorageItem(key) {
        localStorage.removeItem(key);
    }

    static getAccessToken() {
        return localStorage.getItem('access_token');
    }

    static setAccessToken(val) {
        localStorage.setItem('access_token', val);
    }
}