import React from "react";
import Button from "../Button/Button";
import JumbotronImg from "../../assets/img/statics/jumbotron_image_64.png";
// import JumbotronImgMobile from "../../assets/img/statics/jumbotron_mobile_image_64.png";

const RightSide = ({ className, style }) => {
  return (
    <div style={style} className={`jumbotron_right_side ${className !==null || className !== undefined ? className : ''}`}>
        <img className="jumbotron_featured" src={JumbotronImg} alt="Jumbotron" />
        <p className="highlighted_text d_none d_md_block color_white_text">HIGHLIGHTED PRODUCT</p>
        <div className="jumbotron_action_right">
          <Button 
              style={{background: 'rgba(255, 255, 255, 0.50)', width: 'auto', padding: '8px 16px'}}
              className={'btn_price border_radius_3'}
              textClassName={'color_brown_text_2 font_xl leading_8'}
              size={'md'}
              text="$329"
          />
          <h2 className="mt_8">Pösht Sofa</h2>
          <Button 
              className={'btn_view_details border_radius_3 bg_brown_1 mt_16'}
              size={'md'}
              text="VIEW DETAILS"
              textClassName={'color_white_text font_sm'}
              iconPosition="right"
              icon={<img src="./assets/icons/ico_chevron_right.svg" alt="arrow right" />}
          />
        </div>
    </div>
  );
};

export default RightSide;
