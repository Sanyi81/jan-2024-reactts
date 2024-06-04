import {FC} from "react";
import HeaderComponent from "../components/HeaderComponent";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;