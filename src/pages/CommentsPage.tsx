import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ICommentModel} from "../models/ICommentModel";
import apiService from "../services/axois.service";
import CommentsComponent from "../components/commentComponent/CommentsComponent";
;

const CommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        if (id) {
            apiService.getCommentsForPosts(id).then(value => setComments(value.data))
        }
    }, [id]);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;