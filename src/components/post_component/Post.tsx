import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

interface IProps {
    post: IPostModel
}

type IPropsType = IProps & { children?: React.ReactNode };

const Post: FC<IPropsType> = ({post}) => {
    return (
        <div>
            <li>{post.id}. {post.title}<br/> {post.body}</li>
        </div>
    );
};

export default Post;