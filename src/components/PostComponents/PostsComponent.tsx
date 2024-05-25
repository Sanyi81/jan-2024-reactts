import React, {FC, useEffect, useState} from 'react';
import {IPostModel, PostsResponseModel} from "../../models";
import apiService from "../../services/axios.service";
import PostComponent from "./PostComponent";

interface IProps {
    posts: PostsResponseModel
}

const PostsComponent: FC<IProps> = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        apiService.getAllPosts().then(({data}) => setPosts(data.posts))
    }, []);

    return (
        <div>
            {posts.map((post) => (<PostComponent key={post.id} post={post}/>))}
        </div>
    );
};

export default PostsComponent;