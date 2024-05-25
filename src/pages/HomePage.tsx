import React from 'react';
import {Link} from "react-router-dom";

import styles from './header.module.css'

const HomePage = () => {
    return (
        <div className={styles.HeaderComponent}>
            <Link to='/'>HomePage</Link>
            <br/>
            <Link to='users'>UsersPage</Link>
        </div>
    );
};

export default HomePage;