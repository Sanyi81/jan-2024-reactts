import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/UsersPage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts/:id', element: <PostPage/>}
        ]
    }
];

export const router = createBrowserRouter(routes);