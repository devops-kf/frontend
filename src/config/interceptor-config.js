import axios from "axios";
import LocalStorageService from "../services/local-storage.service";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const refreshAuthCall = failedRequest =>
    // todo
    axios.get('').then(tokenRefreshResponse => {
        LocalStorageService.setAccessToken(tokenRefreshResponse.data.accessToken);
        failedRequest.response.config.headers["Authorization"] = `Bearer ${tokenRefreshResponse.data.accessToken}`;
        return Promise.resolve();
    });

createAuthRefreshInterceptor(axios, refreshAuthCall);

export default function registerInterceptors() {
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            if (error.status === 401) {
                LocalStorageService.removeLocalStorageItem('access_token');
            }
            return Promise.reject(error);
        }
    );

    axios.interceptors.request.use(request => {
        request.headers["Authorization"] = `Bearer ${LocalStorageService.getAccessToken() || ''}`;
        return request;
    });
}