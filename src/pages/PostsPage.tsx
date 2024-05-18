import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import apiService from "../services/axois.service";
import PostsComponent from "../components/postComponents/PostsComponent";

const PostsPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id) {
            apiService.getPostsOfUser(id).then(value => setPosts(value.data))
        }
    }, [id]);

    return (
        <div>
            <PostsComponent posts={posts} />
        </div>
    );
};

export default PostsPage;