import React from "react";

const SubMenuItem = ({ subMenuTitle, subMenuDesc, subMenuImg, subMenuLink="#" }) => { 
    return (
        <li className="sub_nav_link_item">
            <a className="text_decoration_none font_sm leading_5 letter_spacing_4 color_black_text d_flex flex_row justify_between align_center colGap_1" href={subMenuLink}>
                <img src={subMenuImg} alt={subMenuTitle} />
                <div>
                    <h3 className="font_sm">{subMenuTitle}</h3>
                    <p className="font_xs">{subMenuDesc}</p>
                </div>
            </a>
        </li>
    )
}

const SubMenuList = ({ list = []}) => { 
    return (
        <>
                <ul className="list_style_none d_grid grid_col_2 gap_2">
                    {
                        list.length !== 0 ? list.map((subMenu, index) => {
                            return (
                                <SubMenuItem key={index} {...subMenu} />
                            )
                        }) : null
                    }
                </ul>
        </>
    )
}

export default SubMenuList;