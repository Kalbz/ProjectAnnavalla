import React from 'react';
import AirbnbImage from './AirbnbImage';
import testImage from '../Assets/Images/test.jpg';

const ImageGrid = () => {
    return (
        <div className="image-grid">
            {[...Array(12)].map((_, index) => (
                <AirbnbImage
                    key={index}
                    src={testImage}
                    alt={`Test Image ${index + 1}`}
                    text={`This is the text for image ${index + 1}`}
                />
            ))}
        </div>
    );
}

export default ImageGrid;
