import React from 'react';
import './Button.css';

const Button = ({ value="Button" }) => {
    return(
        <div>
            <button class="button">{value}</button>
        </div>
    )
}

export default Button;