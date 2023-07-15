import React from "react";

const MenuItem = ({ id, text, icon, iconPosition, className, style, children, anchorClassName, link = "#" }) => {
    const ref = React.useRef(null);
    const [openSubMenu, setOpenSubMenu] = React.useState(false);

    const toggleSubMenu = () => {
        setOpenSubMenu(!openSubMenu);
    }

    // handle click outside
    React.useEffect(() => {
        const checkIfClickedOutside = e => {
            if (openSubMenu && ref.current && !ref.current.contains(e.target)) {
                setOpenSubMenu(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [openSubMenu])


    return (
        <li ref={ref} onClick={toggleSubMenu} style={style} className={`nav_link_item ${className !== null || className !== undefined ? className : ''}`}>
            <a className={`text_decoration_none font_sm leading_5 letter_spacing_4 color_black_text ${icon !== null ? 'd_flex flex_row justify_between align_center' : ''} ${anchorClassName !== null || anchorClassName !== undefined ? anchorClassName : ''}`} href={link}>
                {icon && iconPosition === "left" ? icon : null}
                {text}
                {icon && iconPosition === "right" ? icon : null}
            </a>
 
            {/* Jika terdapat sub menu maka tampilkan children */}
            {
                children !== null ? (
                    <div className={`sub_nav_links ${openSubMenu ? 'show_sub_nav_links' : ''}`}>
                        {children}
                    </div>
                ) : null
            }
        </li>
    )
}  

export default MenuItem;