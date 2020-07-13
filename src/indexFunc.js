 import React from 'react';
 import ReactDOM from 'react-dom';

 import "./style.css";

//  Normal JS ES 5 method
 function HelloWorldApp() {
    return (
        <div>
            <h1 style={{textAlign: "center", font: "bold 48px arial"}}>Hello World</h1>
            <button class="button">Got it</button>
        </div>
    )
 }

ReactDOM.render(<HelloWorldApp />, document.getElementById('root'))