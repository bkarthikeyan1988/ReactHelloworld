import React from 'react';
import "./style.css";

// Code without button Component
const HelloWorldApp = () => {
    return (
        <div>
            <h1 style={{textAlign: "center", font: "bold 48px arial"}}>Hello World</h1>
            <button class="button">Got it</button>
        </div>
    )
}

export default HelloWorldApp;
