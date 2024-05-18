import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './header.module.css'

const HeaderComponent: FC = () => {
    return (
        <div className={styles.HeaderComponent}>
            <Link to='/'>home page</Link>
            <br/>
            <Link to='users'>users page</Link>
        </div>
    );
};

export default HeaderComponent;