import React from "react";

const Button = ({
    size = "sm",
    text,
    type = "button",
    icon,
    iconPosition,
    style,
    onClick,
    textClassName,
    className,
    isSquare = false
}) => { 
    return (
        <button onClick={onClick} style={style} type={type} className={`btn d_flex flex_row colGap_1 ${className} ${isSquare  === true ? 'btn_square' : size === 'xs' ? 'btn_xs' : size === 'sm' ?  'btn_sm' : size === 'md' ? 'btn_md' : size === 'lg' ? 'btn_lg' : size === 'xlg' ? 'btn_xlg' : '' }`}>
            {icon && iconPosition === "left" ? icon : null}
            {text ? <p className={textClassName}>{text}</p> : null}
            {icon && iconPosition === "right" ? icon : null}
        </button>
    )
}

export default Button;