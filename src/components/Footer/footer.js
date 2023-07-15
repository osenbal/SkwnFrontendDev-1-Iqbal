import React from "react";
import "./footer.modules.css";
import Logo from "../Navbar/Logo";

const Footer = () => {
    return (
        <footer className="footer d_flex flex_row justify_between">
            <div className="container_left_side d_flex flex_col">
                <div className="footer_detail_institution d_flex flex_col">
                    <Logo className={'footer_logo'} />
                    <p className="footer_desc"> 
                        Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is comfortability.
                    </p>
                </div>

                <p className="footer_copyright">
                    ©Copyright 2022 Dekoor
                </p>
            </div>

            <div className="container_right_side d_flex flex_row">
                <div className="footer_container_map">
                    <p>Support</p>
                    <ul className="footer_map d_flex flex_col">
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Shipping & Returns</a></li>
                        <li><a href="/">Care guide</a></li>
                        <li><a href="/">Reedem Warranty</a></li>
                    </ul>
                </div>

                <div className="footer_container_map">
                    <p>Social Media</p>
                    <ul className="footer_map d_flex flex_col">
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">TikTok</a></li>
                    </ul>
                </div>


                <div className="footer_container_map">
                    <p>About Us</p>
                    <ul className="footer_map d_flex flex_col">
                        <li><a href="/">Our Story</a></li>
                        <li><a href="/">Designer</a></li>
                        <li><a href="/">Craftmanship</a></li>
                        <li><a href="/">Sustainability</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    )

}

export default Footer;
