import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";

const PostPage = () => {
    let {id} = useParams();
    const dispatch = useAppDispatch();
    const {post} = useAppSelector(state => state.postSlice);
    useEffect(() => {
        dispatch(postActions.loadPostById(id))
    }, [id]);

    return (
        <div>
            {
                post && post.body
            }
        </div>
    );
};

export default PostPage;