import React from 'react';

const NotFound = ({ location }) => (
    <div className="not-found">
        <h1 className="text-center">404</h1>
        <p className="text-center">The resource at <i>{ location.pathname }</i> was not found.</p>
    </div>
);

export default NotFound;