import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {authService} from "../services/api.service";

const FormComponent = () => {
    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>(
            {defaultValues: {username: 'Sanyi81', password: 'S@ndor81'}}
    );

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData:AuthDataModel):Promise<void> => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    };
    return (
        <div>
            <h3>Login form</h3>
            <div>
                {isAuthState? <span>OK</span> : <span>Not OK</span>}
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
            <input type="text" {...register('username')}/>
            <input type="text" {...register('password')}/>
                <button>Auth me</button>

        </form>
        </div>
    );
};

export default FormComponent;