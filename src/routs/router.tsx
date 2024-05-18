import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

export const routerConfig  = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: 'users', element: <UsersPage/>,
                children: [
                    {path: ':id', element: <PostsPage/>}
                ]
            },
            {path: 'posts/:id', element: <CommentsPage/>}
        ]
    }
]);