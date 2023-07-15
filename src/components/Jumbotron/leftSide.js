import React from "react";
import Button from "../Button/Button";

const LeftSide = ({ className, style }) => {
    return (
        <div className={`jumbotron_left_side ${className}`}style={style}>
            <div className="d_flex flex_row justify_end justify_center_md">
                <div className={`d_flex flex_col align_end align_center_md rowGap_3`}>
                    <h1 className="jumbotron_title color_brown_text_1 font_5xl letter_spacing_1 font_weight_800">The kind of <span className="color_brown_text_4">furniture</span> you have been looking for</h1>
                    <div className="jumbotron_action_left d_flex flex_row flex_col_md justify_center w_100 colGap_1_5 rowGap_1_5_md">
                        <Button 
                            iconPosition={'left'}
                            icon={<img src="./assets/icons/ico_search.svg" alt="search" />}
                            className={'btn_search_catalog border_radius_3 bg_brown_3 w_50 w_100_md'}
                            textClassName={'color_brown_text_2 font_xl leading_8'}
                            size={'lg'}
                            text="SEARCH CATALOG"
                        />
                        <Button    
                            iconPosition={'left'}
                            icon={<img src="./assets/icons/ico_play_circle_outline.svg" alt="search" />}
                            className={'btn_watch_videos border_radius_3 bg_none border_style_solid border_brown_2 border_width_1 w_50 w_100_md'}
                            textClassName={'color_brown_text_2 font_xl leading_8'}
                            size={'lg'}
                            text="WATCH VIDEOS" 
                        />
                    </div>
                </div>
                
            </div>
        </div>
    ) 
}

export default LeftSide;