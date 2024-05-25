import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";

const axiosService = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const apiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosService.get('/users');
    }
};

export default apiService;
