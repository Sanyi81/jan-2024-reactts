import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../model/postModel/IpostModel";
import {userService} from "../../services/axios.service";
import PostComponent from "./PostComponent";

interface IProps {
    posts: IPostModel[]
}

const PostsComponent: FC<IProps> = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        userService.getAllPosts().then(value => setPosts(value.data));
    }, []);

    return (
        <div>
            {posts.map((post: IPostModel) => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;