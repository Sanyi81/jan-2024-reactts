import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import TodosPage from "../pages/TodosPage";
import UserTodosPage from "../pages/UserTodosPage";
import UserPostsPage from "../pages/UserPostsPage";



export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: 'users', element: <UsersPage/>, children: [
                    {path: ':id/posts', element: <UserPostsPage/>}
                ]},
            {path: 'users/:id/todos', element: <UserTodosPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'todos', element: <TodosPage/>},
        ]
    }
]);