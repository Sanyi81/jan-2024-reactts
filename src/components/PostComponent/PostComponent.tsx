import React, {FC} from 'react';
import {IPostModel} from "../../model/postModel/IpostModel";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <h3>User {post.userId}</h3>
            <h4>{post.id}. {post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;