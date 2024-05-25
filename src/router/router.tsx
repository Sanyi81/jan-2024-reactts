import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import TodosPage from "../pages/TodosPage";



export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/'},
            {path: 'posts', element: <PostsPage/>},
            {path: 'todos', element: <TodosPage/>},
        ]
    }
]);