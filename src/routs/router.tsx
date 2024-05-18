import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostCommentsPage from "../pages/PostCommentsPage";
import UserPostsPage from "../pages/UserPostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostsPage from "../pages/PostsPage";

export const routerConfig  = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: 'users', element: <UsersPage/>,
                children: [
                    {path: ':id', element: <UserPostsPage/>}
                ]
            },
            {path: 'posts/:id', element: <PostCommentsPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
        ]
    }
]);