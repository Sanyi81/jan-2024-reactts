import React, {FC} from 'react';
import {ITodoModel} from "../../models/ITodoModel";

interface IProps {
    todo: ITodoModel
}
const TodoComponent: FC<IProps> = ({todo}) => {

    return (
        <div>
            <h3>{todo.id}. {todo.todo}
                <br/>
                User № {todo.userId}</h3>
        </div>
    );
};

export default TodoComponent;