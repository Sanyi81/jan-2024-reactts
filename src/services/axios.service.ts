import axios, {AxiosResponse} from "axios";
import {IPostModel, IUserModel} from "../models";
import {ITodoModel} from "../models/ITodoModel";

const axiosService = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const apiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosService.get('/users');
    },
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosService.get('/posts')
    },
    getAllTodos: (): Promise<AxiosResponse<ITodoModel>> => {
        return axiosService.get('/todos')
    },
    getTodosOfUser: (userId: string): Promise<AxiosResponse<ITodoModel[]>> => {
        return axiosService.get(`/users/${userId}/todos`);
    },
    getPostsOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosService.get(`/users/${userId}/posts`)
    }
};

export default apiService;
