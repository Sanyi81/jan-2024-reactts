import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ICommentModel} from "../models/ICommentModel";
import apiService from "../services/axois.service";
import CommentsOfPostComponent from "../components/commentComponent/CommentsOfPostComponent";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        if (id) {
            apiService.getCommentsOfPosts(id).then(value => setComments(value.data))
        }
    }, [id]);

    return (
        <div>
            <CommentsOfPostComponent comments={comments}/>
        </div>
    );
};

export default PostCommentsPage;