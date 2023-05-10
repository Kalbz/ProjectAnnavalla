import React from 'react';

const Button = ({ text }) => {
    const handleClick = () => {
        console.log("Button clicked!");
        window.location.href = 'http://www.google.com';
    };

    return (
        <div style={{ position: "absolute", left: "10px", bottom: "10px", color: "black"}}>
            <p style={{ margin: 0, fontSize: "40px", color: "white" }}>{"ANNAVÄLLA"}</p>
            <p style={{ margin: 0, fontSize: "20px", color: "white" }}>{"Om ni vill hyra ett lantligt gästhus har ni"}</p>
            <p style={{ margin: 0, fontSize: "20px", color: "white" }}>{"kommit helt rätt. Huset passar perfekt "}</p>
            <p style={{ margin: 0, fontSize: "20px", color: "white" }}>{"för två till fem (plus ett spädbarn) som"}</p>
            <p style={{ margin: 0, fontSize: "20px", color: "white" }}>{"söker ett naturnära och mysigt boende"}</p>
            <p style={{ margin: 0, fontSize: "20px", color: "white" }}>{"utanför Skurup."}</p>
            <button style={{ padding: "10px", fontSize: "16px", marginTop: "10px" , color: "#F55B18"}} onClick={handleClick}>
                BOKA NU
            </button>
            <button style={{ padding: "10px", fontSize: "16px", marginTop: "10px" , color: "#F55B18"}} onClick={handleClick}>
                BOKA NU
            </button>
        </div>
    );
};

export default Button;
