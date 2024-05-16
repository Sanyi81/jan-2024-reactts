import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../../model/commentModel/ICommentModel";
import {userService} from "../../services/axios.service";
import CommentComponent from "./CommentComponent";

interface IProps {
    comments: ICommentModel[];
}

const CommentsComponent: FC<IProps> = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        userService.getAllComments().then(value => setComments(value.data));
    }, []);

    return (
        <div>
            {comments.map((comment: ICommentModel) => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentsComponent;