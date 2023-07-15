import React from "react";

import "./subscriptions.modules.css";
const Subscriptions = () => {
    return (
        <div className="container_subsciptions d_flex flex_col bg_gray_1">
        
            <h3>LIMITED DEALS</h3>
            <p>Become a member and get 10% off of your first purchase</p>

            <div className="container_input_subscription">    
                <input placeholder="Enter your email here"/>
                <button className="bg_brown_3">
                    <img src="./assets/icons/ico_mail.svg" alt="mail" />
                </button>
            </div>

        </div>
    );
}

export default Subscriptions;