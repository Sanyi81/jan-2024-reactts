import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPostModel} from "../models";
import apiService from "../services/axios.service";
import PostComponent from "../components/PostComponents/PostComponent";

const UserPostsPage: FC = () => {

    const {id} = useParams();

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id) {
            apiService.getPostsOfUser(id).then(({data}) => setPosts(data.posts));
        }
    }, [id]);

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPostsPage;