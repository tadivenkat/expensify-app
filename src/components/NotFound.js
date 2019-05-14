import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <p>404! Not Found. The page you are looking for is not found on our site.</p>
            <Link to="/">Dashboard</Link>
        </div>
    );
}

export default NotFound;