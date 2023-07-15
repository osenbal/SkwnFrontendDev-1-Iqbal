import React from "react";

const Logo = ({className, style}) => {
    return (
        <div style={style} id="Logo" className={`logo ${className !== null || className !== undefined ? className : ''}`}>
            <img style={{width: '100%', height: '100%'}} src="./assets/icons/ico_logo.svg" alt="logo" />
        </div>
    );
}

export default Logo;