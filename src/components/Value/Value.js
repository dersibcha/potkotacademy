import React from "react";
import "./Value.css";

const Value = ({title,image,text}) => { 
    
    const renderedText = text.split('/n').map(str => <>{str}<br></br></>);
    return (
        <>
            <div class="ValueContainer">
                <img class="ValueImage" alt={title} src={image} />
                <h3 class="ValueTitle">
                    {title}
                </h3>
                <div class="ValueText">
                    {renderedText}
                </div>
            </div>
        </>
    );
};

export default Value;
