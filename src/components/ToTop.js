import React from 'react';
import arrow from "../assets/arrow-icon.svg"

const ToTop = () => {
    return (
        <div className="top" onClick={() => window.scrollTo(0, 0)}>
            <img src={arrow} alt="arrow" />
        </div>
    );
};

export default ToTop;