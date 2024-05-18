import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "./PostComponent";

interface IProps {
    posts: IPostModel[]
}

const PostsOfUserComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <PostComponent post={post} />)}
        </div>
    );
};

export default PostsOfUserComponent;