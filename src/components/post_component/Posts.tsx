import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {PostsResponseModel} from "../models/responseModels/PostsResponseModel";

const Posts:FC<PostsResponseModel> = ({posts}) => {

    return (
        <div>
            {
                posts.map((post:IPostModel) => (<li key={post.id}>{post.id}. {post.title}<br/> {post.body}</li>)
                )
            }
        </div>
    );
};

export default Posts;