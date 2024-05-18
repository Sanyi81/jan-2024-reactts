import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "./PostComponent";
import apiService from "../../services/axois.service";

interface IProps {
    posts: IPostModel[]
}

const PostsComponent: FC<IProps> = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        apiService.getAllPosts().then(value => setPosts(value.data));
    }, []);

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

export default PostsComponent;