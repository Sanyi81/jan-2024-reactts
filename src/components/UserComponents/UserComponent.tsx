import React, {FC} from 'react';
import {IUserModel} from "../../models";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUserModel
}
const UserComponent: FC<IProps> = ({user}) => {

    const navigate = useNavigate();
    return (
        <div>
            <h3>{user.id}. {user.firstName} {user.lastName}
                <br/>
                {user.username}
            </h3>

            <button onClick={
                () => {
                    navigate(`/users/${user.id}/todos`)
                }
            }>
                show todos
            </button>
            <button onClick={
                () => {
                    navigate(`/users/${user.id}/posts`)
                }
            }>
                show posts
            </button>
        </div>
    );
};

export default UserComponent;