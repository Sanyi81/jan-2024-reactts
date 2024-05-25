import React, {FC} from 'react';
import {IPostModel} from "../../models";

interface IProps {
    post: IPostModel
}
const PostComponent: FC<IProps> = ({post}) => {

    return (
        <div>
            <h4>{post.id}. {post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;