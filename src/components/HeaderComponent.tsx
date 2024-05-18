import React, {FC} from 'react';
import {Link} from "react-router-dom";

const HeaderComponent: FC = () => {
    return (
        <div>
            <Link to='/'>home page</Link>
            <br/>
            <Link to='users'>users page</Link>
        </div>
    );
};

export default HeaderComponent;