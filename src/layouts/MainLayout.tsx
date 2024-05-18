import React, {FC} from 'react';
import HeaderComponent from "../components/HeaderComponent";
import {Outlet} from "react-router-dom";
import FooterComponent from "../components/FooterComponent";

const MainLayout: FC = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;