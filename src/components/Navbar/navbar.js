import React from "react";
import Button from "../Button/Button";
import MenuList from "./menuList";
import Logo from "./Logo";
import './navbar.modules.css'

const Navbar = () => { 
    const [isOpenOverlayMenu, setIsOpenOverlayMenu] = React.useState(false)

    return (
        <nav id="Navbar" className="d_flex flex_row justify_between align_center">
        {/* Logo */}
        <Logo />
        
        {/* Menus navbar desktop */}
        <MenuList className={'d_md_none'} />
        
        {/* Actions */}
        <div className="d_md_none nav_action d_flex flex_row colGap_1">
            <Button 
                text="Sign Up"
                className="bg_brown_3 border_radius_2"
                textClassName="color_brown_text_1"
                onClick={() => {}}
            />
            <Button
                isSquare={true}
                icon={<img src="./assets/icons/ico_shopping_bag.svg" alt="shopping bag" />}
                iconPosition="left"
                className="bg_brown_1 border_radius_2"
                onClick={() => {}}
            />
        </div>

        {/* Hamburger */}
        <div className="d_none d_md_flex hamburger">
            <Button 
                isSquare={true}
                icon={<img src="./assets/icons/ico_hamburger.svg" alt="hamburger" />}
                iconPosition="left"
                className="bg_none border_radius_2"
                onClick={() => setIsOpenOverlayMenu(!isOpenOverlayMenu)}
            />
        </div>

        {/* overlay fro menu navbar mobile */}
        <div className={`d_none d_md_flex flex_col overlay_menu ${isOpenOverlayMenu ? 'show_overlay_menu' : ''}`}>
            <div className="overlay_menu_container w_100">
                <div className="overlay_menu_header d_flex flex_row justify_between align_center">
                    <Logo />
                    <Button
                        isSquare={true}
                        icon={<img src="./assets/icons/ico_close.svg" alt="close" />}
                        iconPosition="left"
                        className="bg_none border_radius_2"
                        onClick={() => setIsOpenOverlayMenu(!isOpenOverlayMenu)}
                    />
                </div>
            </div>

            <div className="overlay_menu_content">
                <MenuList className={'overlay_menu_list'} />
            </div>
        </div>
      </nav>    
    )
}


export default Navbar;