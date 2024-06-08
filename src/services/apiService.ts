import axios from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

axiosInstance.interceptors.request.use(request => {
    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh'))
        request.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('tokenPair')));

    return request;
})

const authService = {
    authentication: async (authData:AuthDataModel): Promise<boolean> => {
        let response;
try {
    response =
        await axiosInstance.post<ITokenObtainPair>('/auth', authData);
    localStorage.setItem('tokenPair', JSON.stringify(response.data));
} catch (e) {
    console.log(e);
}


        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: () => {}

}

const carService = {
    getCars: async () => {
        await axiosInstance.get('/cars',)
    }
}

export {
    authService,
    carService
}