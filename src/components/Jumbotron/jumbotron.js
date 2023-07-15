import React from "react";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";

import "./jumbotron.modules.css";

const Jumbotron = ({ className, style }) => { 
    return (
        <div className={`jumbotron d_flex flex_row flex_col_md ${className}`} style={style}>
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default Jumbotron;