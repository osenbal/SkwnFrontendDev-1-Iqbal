import React from "react";
import './partner.modules.css';

import LogoGusto from "../../assets/img/statics/logo_gusto.png";
import LogoStripe from "../../assets/img/statics/logo_stripe.png";
import LogoTreeHouse from "../../assets/img/statics/logo_treehouse.png";
import LogoUpwork from "../../assets/img/statics/logo_upwork.png";

const Partner = () => {
    const partners = [
        {
            id: 1,
            name: 'Gusto',
            logo: LogoGusto
        }, 
        {
            id: 2,
            name: 'Stripe',
            logo: LogoStripe
        },
        {
            id: 3,
            name: 'TreeHouse',
            logo: LogoTreeHouse
        },
        {
            id: 4,
            name: 'Upwork',
            logo: LogoUpwork
        }
    ]

    return (
        <>
            <div className="container_partners d_flex flex_row flex_col_md justify_between align_center">
                <div className="total_partners color_brown_text_1">
                    <p>25+</p>
                    <p>PARTNERED BRANDS</p>
                </div>

                <div className="logo_partners d_flex flex_row justify_between align_center colGap_2">
                    {
                        partners.map((partner) => { 
                            return (
                                <img key={partner.id} src={partner.logo} alt={partner.name} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Partner;