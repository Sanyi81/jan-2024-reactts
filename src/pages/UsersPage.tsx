import React, {useEffect} from 'react';
import {useAppDispath} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import UsersComponent from "../components/UsersComponent";

const UsersPage = () => {
    let dispatch = useAppDispath();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);
    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;