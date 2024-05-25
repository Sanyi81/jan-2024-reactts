import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";


export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: 'users', element: <UsersPage/>}
        ]
    }
]);