import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './header.module.css'

const HeaderComponent: FC = () => {
    return (
        <div className={styles.HeaderComponent}>
            <Link to='/'>home page</Link>
            <Link to='users'>users page</Link>
            <Link to='posts'>posts page</Link>
            <Link to='comments'>comments page</Link>
        </div>
    );
};

export default HeaderComponent;