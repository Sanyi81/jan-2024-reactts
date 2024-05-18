import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {useNavigate} from "react-router-dom";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useNavigate();
    return (
        <div>
            <h4>User {post.userId}</h4>
            {post.id}. {post.title}
            "{post.body}"
            <br/>

            <button
                onClick={() => {
                    navigate(`/posts/${post.id}`);
                }}
            >
                Show comments
            </button>

        </div>
    );
};

export default PostComponent;