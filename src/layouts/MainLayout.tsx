import React from 'react';
import HomePage from "../pages/HomePage";
import {Outlet} from "react-router-dom";
import FooterPage from "../pages/FooterPage";

const MainLayout = () => {
    return (
        <div>
            <HomePage/>
            <hr/>
            <Outlet/>
            <hr/>
            <FooterPage/>
        </div>
    );
};

export default MainLayout;