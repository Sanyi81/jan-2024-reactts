import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {PostsResponseModel} from "../../models/responseModels/PostsResponseModel";
import Post from "./Post";

const Posts:FC<PostsResponseModel> = ({posts}) => {

    return (
        <div>
            {
                posts.map((post:IPostModel) => (<Post key={post.id} post={post}/>)
                )
            }
        </div>
    );
};

export default Posts;