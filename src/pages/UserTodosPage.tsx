import React, {FC, useEffect, useState} from 'react';
import TodosByUserComponent from "../components/TodosComponents/TodosByUserComponent";
import {useParams} from "react-router-dom";
import apiService from "../services/axios.service";
import {ITodoModel} from "../models/ITodoModel";

const UserTodosPage: FC = () => {

    const {id} = useParams();

    const [todos, setTodos] = useState<ITodoModel[]>([]);

    useEffect(() => {
        if (id) {
            apiService.getTodosOfUser(id).then(({data}) => setTodos(data.todos))
        }
    }, [id]);
    return (
        <div>
            <TodosByUserComponent todos={todos}/>
        </div>
    );
};

export default UserTodosPage;