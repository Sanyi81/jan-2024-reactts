import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../model/userModel/IUserModel";
import {IPostModel} from "../model/postModel/IpostModel";
import {ICommentModel} from "../model/commentModel/ICommentModel";

const axiosService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const userService = ({
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosService.get('/users');
    },
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosService.get('/posts');
    },
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosService.get('/comments');
}
});

export {
    userService,
}