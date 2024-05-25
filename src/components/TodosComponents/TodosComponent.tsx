import React, {FC, useEffect, useState} from 'react';
import {TodosResponseModel} from "../../models";
import {ITodoModel} from "../../models/ITodoModel";
import apiService from "../../services/axios.service";
import TodoComponent from "./TodoComponent";

interface IProps {
    todos: TodosResponseModel
}
const TodosComponent: FC<IProps> = () => {

    const [todos, setTodos] = useState<ITodoModel[]>([]);

    useEffect(() => {
        apiService.getAllTodos().then(({data}) => setTodos(data.todos))
    }, []);

    return (
        <div>
            {todos.map((todo) => (<TodoComponent key={todo.id} todo={todo}/>))}
        </div>
    );
};

export default TodosComponent;