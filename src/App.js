import React from 'react';
import Button from './Button/Button';
import "./style.css";

const HelloWorldApp = () => {
    return (
        <div>
            <h1 style={{textAlign: "center", font: "bold 48px arial"}}>Hello World</h1>
            <div className="buttonBlock">
                <Button value="Got It" />
                <Button value="Cancel" />
                <Button />
            </div>
            {/* <button class="button">Got it</button> */}
        </div>
    )
}

export default HelloWorldApp;
