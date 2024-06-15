import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispath, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";

const UserPage = () => {
    let {id} = useParams();
    const dispath = useAppDispath();
    const {user} = useAppSelector(state => state.userSlice);
    useEffect(() => {
        dispath(userActions.loadUserByID(id));
    }, [id]);

    return (
        <div>
            {
                user && user.email
            }
        </div>
    );
};

export default UserPage;