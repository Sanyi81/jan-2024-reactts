import React from 'react';
import {Link} from "react-router-dom";

import styles from './header.module.css'

const HomePage = () => {
    return (
        <div className={styles.HeaderComponent}>
            <Link to='/'>HomePage</Link>
            <Link to='users'>UsersPage</Link>
            <Link to='posts'>PostsPage</Link>
            <Link to='todos'>TodosPage</Link>
        </div>
    );
};

export default HomePage;