import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import CommentComponent from "./CommentComponent";
import apiService from "../../services/axois.service";

interface IProps {
    comments: ICommentModel[]
}

const CommentsComponent: FC<IProps> = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        apiService.getAllComments().then(value => setComments(value.data));
    }, []);

    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)}
        </div>
    );
};

export default CommentsComponent;