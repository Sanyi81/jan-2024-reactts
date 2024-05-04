import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

interface IProps {
    post: IPostModel
}

const Post: FC<IProps> = ({post}) => {
    return (
        <div>
            <li>{post.id}. {post.title}<br/> {post.body}</li>
        </div>
    );
};

export default Post;