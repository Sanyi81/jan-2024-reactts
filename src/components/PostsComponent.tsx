import React from 'react';
import {useAppSelector} from "../redux/store";
import PostComponent from "./PostComponent";


const PostsComponent = () => {
    let {posts, isLoaded} = useAppSelector(state => state.postSlice)
    return (
        <div>
            {
                isLoaded ?
                posts.map(post => <PostComponent post={post} key={post.id}/>)
                :
                <h3>Loading....</h3>
            }
        </div>
    );
};

export default PostsComponent;