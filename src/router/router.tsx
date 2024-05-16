import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import React from "react";
import {HomePage} from "../pages/HomePage";
import UsersComponent from "../components/UserComponent/UsersComponent";
import PostsComponent from "../components/PostComponent/PostsComponent";
import CommentsComponent from "../components/CommentComponent/CommentsComponent";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersComponent users={[]}/>},
            {path: 'posts', element: <PostsComponent posts={[]}/>},
            {path: 'comments', element: <CommentsComponent comments={[]}/>},
        ]
    }
]);