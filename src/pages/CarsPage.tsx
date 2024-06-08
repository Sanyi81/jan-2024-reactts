import React, {useEffect} from 'react';
import {carService} from "../services/apiService";

const CarsPage = () => {

    useEffect(() => {
        carService.getCars()
    }, []);
    return (
        <div>
            CarsPage
        </div>
    );
};

export default CarsPage;