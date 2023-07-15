import React from "react";
import Button from "../Button/Button";
import "./whyus.modules.css";

const WhyUs = () => {
    return (
        <>
            <div className="section_whyus bg_brown_1 color_brown_text_3">
                <h3 className="font_xl leading_8 font_weight_400">WHY CHOOSE US?</h3>
                <p className="font_4xl font_weight_700">We care about details and the quality of our products</p>

                <div className="advantage_list d_flex flex_row">
                    <div className="advantage_item d_flex flex_row align_center justify_between colGap_1">
                        <div>
                            <Button 
                                style={{backgroundColor: 'rgba(229, 240, 182, 0.50)'}}
                                className={'border_radius_2'}
                                isSquare={true} 
                                iconPosition="left"
                                icon={<img src="./assets/icons/ico_search_light_brown.svg" alt="search" />}
                            />
                        </div>
                        <p className="font_xl color_brown_text_3 font_weight_700">MANUFACTURED WITH QUALITY MATERIALS</p>
                    </div>
                    <div className="advantage_item d_flex flex_row align_center justify_between colGap_1">
                        <div>
                            <Button 
                                style={{backgroundColor: 'rgba(229, 240, 182, 0.50)'}}
                                className={'border_radius_2'}
                                isSquare={true} 
                                text=" 5 "
                                textClassName={'font_xl font_weight_700 color_white_text'}
                            />
                        </div>
                        <p className="font_xl color_brown_text_3 font_weight_700">5 YEARS OF WARRANTY FOR EACH PROFUCT</p>
                    </div>
                    <div className="advantage_item d_flex flex_row align_center justify_between colGap_1">
                        <div>
                            <Button 
                                style={{backgroundColor: 'rgba(229, 240, 182, 0.50)'}}
                                className={'border_radius_2'}
                                isSquare={true} 
                                iconPosition="left"
                                icon={<img src="./assets/icons/ico_work_outline.svg" alt="search" />}
                            />
                        </div>
                        <p className="font_xl color_brown_text_3 font_weight_700">20 YEARS OF EXPERTISE</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs;