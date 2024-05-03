import React, {useState} from 'react';
import './App.css';
import Users from "./components/user_component/Users";
import {IPostModel} from "./components/models/IPostModel";
import {getAllPostsOfUser} from "./components/srevices/axios.service";
import Posts from "./components/post_component/Posts";



const App = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);
    
    const lift = (userId:number) => {
        getAllPostsOfUser(userId).then(({data}) => {
            setPosts(data.posts)
        })
    }
    
    return (
        <div className={'App'}>
            <div className={'users'}><Users lift={lift}/></div>
           <div className={'posts'}><Posts posts={posts}/></div>
        </div>
    );
};

export default App;