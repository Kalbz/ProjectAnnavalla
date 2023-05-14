import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const AirbnbImage = ({src, alt, text}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [srcLoaded, setSrcLoaded] = useState('');

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setIsLoaded(true);
            setSrcLoaded(src);
        };
    }, [src]);

    return (
        <div className="airbnb-image">
            <img src={src} alt={alt} onClick={() => setIsOpen(true)} style={{width: "100%", height: "auto"}}/>
            {isOpen && isLoaded && (
                <Lightbox
                    mainSrc={srcLoaded}
                    onCloseRequest={() => setIsOpen(false)}
                    imageCaption={text}
                />
            )}
        </div>
    );
}

export default AirbnbImage;
