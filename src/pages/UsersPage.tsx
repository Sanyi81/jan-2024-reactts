import React from 'react';
import UsersComponent from "../components/userComponents/UsersComponent";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent users={[]}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;