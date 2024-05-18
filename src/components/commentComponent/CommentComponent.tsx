import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <h4>Post {comment.postId}</h4>
            <h3>{comment.id}. {comment.name}</h3>
            <h3>{comment.email}</h3>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;