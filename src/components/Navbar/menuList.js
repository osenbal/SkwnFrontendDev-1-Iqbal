import React from "react";
import MenuItem from "./menuItem";
import SubMenuList from "./subMenuItem";

const MenuList = ({ className, style }) => { 
    // sub menu funiture
    const subMenuFurnitureList = [
        {
            subMenuTitle: "Sofas",
            subMenuDesc: "Lorem Ipsum dolor sit amet",
            subMenuImg: "https://picsum.photos/60/60",
            subMenuLink: "#"
        },
        {
            subMenuTitle: "Chairs",
            subMenuDesc: "Lorem Ipsum dolor sit amet",
            subMenuImg: "https://picsum.photos/60/60",
            subMenuLink: "#"
        },
        {
            subMenuTitle: "Tables",
            subMenuDesc: "Lorem Ipsum dolor sit amet",
            subMenuImg: "https://picsum.photos/60/60",
            subMenuLink: "#"
        },
        {
            subMenuTitle: "Beds",
            subMenuDesc: "Lorem Ipsum dolor sit amet",
            subMenuImg: "https://picsum.photos/60/60",
            subMenuLink: "#"
        }
    ]

    // menu list navbar
    const menuList= [
        {
            text: "Home",
            icon: null,
            iconPosition: null,
            className: null,
            anchorClassName: null,
            style: null,
            children: null,
            id: null,
            link: "#"
        },
        {
            text: "Furniture",
            icon: <img src="./assets/icons/ico_keyboard_arrow_down.svg" alt="arrow down" />,
            iconPosition: 'right',
            className: null,
            anchorClassName: null,
            style: null,
            id: 'Menu_Furniture',
            children: <SubMenuList list={subMenuFurnitureList} />,
            link: "#"
        },
        {
            text: "Parnerships",
            icon: null,
            iconPosition: null,
            className: null,
            anchorClassName: null,
            style: null,
            children: null,    
            id: null,
            link: "#"
        },
        {
            text: "Contact",
            icon: null,
            iconPosition: null,
            anchorClassName: null,
            className: null,
            style: null,
            children: <SubMenuList list={subMenuFurnitureList} />,
            id: null,
            link: "#"
        }
    ]

    return (
        <ul style={style} className={`nav_links d_flex flex_row flex_col_md justify_between align_center list_style_none ${className !== null || className !== undefined ? className : ''}`}>
            {menuList.map((item, index) => {
                return (
                    <MenuItem
                        key={index}
                        text={item.text}
                        icon={item.icon}
                        iconPosition={item.iconPosition}
                        className={item.className}
                        style={item.style}
                        children={item.children}
                        anchorClassName={item.anchorClassName}
                        id={item.id}
                    />
                )
            })}
        </ul>
    )
}


export default MenuList;