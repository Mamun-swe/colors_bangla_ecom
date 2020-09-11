import React from 'react';
import '../styles/loader.scss';

const Loader = () => {
    return (
        <div className="loading">
            <div className="container">
                <div className="item-1"></div>
                <div className="item-2"></div>
                <div className="item-3"></div>
                <div className="item-4"></div>
                <div className="item-5"></div>
            </div>
        </div>
    );
};

export default Loader;