import React from 'react';

import UsersComponent from "../components/UserComponents/UsersComponent";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <UsersComponent users={[]} />
        </div>
    );
};

export default UsersPage;