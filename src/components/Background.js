import React from 'react';
import backgroundImage from '../Assets/Images/test2.png';

const Background = ({ children }) => {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",

            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",

        }}>
            {children}
        </div>
    );
};

export default Background;
