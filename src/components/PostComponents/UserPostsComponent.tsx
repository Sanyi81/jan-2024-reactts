import React, {FC} from 'react';
import {IPostModel} from "../../models";
import PostComponent from "./PostComponent";

interface IProps {
    posts: IPostModel[]
}

const UserPostsComponent: FC<IProps> = ({posts}) => {

    return (
        <div>
            {posts.map(post => <PostComponent post={post}/>)}
        </div>
    );
};

export default UserPostsComponent;