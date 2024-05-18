import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

let axoisService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const apiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axoisService.get('/users');
    },
    getUserById: (userId: number): Promise<AxiosResponse<IUserModel>> => {
        return axoisService.get(`/users/${userId}`);
    },
    getPostsOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
        return axoisService.get(`/users/${userId}/posts`);
    },
    getCommentsForPosts: (postId: string): Promise<AxiosResponse<ICommentModel[]>> => {
        return axoisService.get(`/posts/${postId}/comments`);
}
}

export default apiService;