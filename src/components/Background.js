import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
    background: #111512;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

function Background({ color, children }) {
    return (
        <BackgroundWrapper
        color = {color}>{children}
            
        </BackgroundWrapper>
    );
}
export default Background;