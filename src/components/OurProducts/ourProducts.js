import React from "react";
import Button from "../Button/Button";
import './ourProducts.modules.css';

import ourProduct from "../../assets/img/statics/ourProduct_1.png";
import ourProduct2 from "../../assets/img/statics/ourProduct_2.png";
import ourProduct3 from "../../assets/img/statics/ourProduct_3.png";
import ourProduct4 from "../../assets/img/statics/ourProduct_4.png";

const OurProducts = () => { 
    const maxMultipleCarousel = 4;
    const carouselRef = React.useRef(null);
    const [activeProduct, setActiveProduct] = React.useState(0);
    const [slicedProducts, setSlicedProducts] = React.useState([]); 
    const [staticActiveProduct, setStaticActiveProduct] = React.useState(1);

    const [products, setProducts] = React.useState([
        {
            id: 1,
            name: 'Bedroom',
            price: '$329',
            description: 'Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.',
            image: ourProduct
        }, 
        {
            id: 2,
            name: 'Living Room',
            price: '$329',
            description: 'Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.',
            image: ourProduct2
        },
        {
            id: 3,
            name: 'Home Office',
            price: '$329',
            description: 'Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.',
            image: ourProduct3
        },
        {
            id: 4,
            name: 'Gaming Room',
            price: '$329',
            description: 'Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.',
            image: ourProduct4
        },
        {
            id: 5,
            name: 'Gaming Room',
            price: '$329',
            description: 'Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.',
            image: ourProduct4
        }
    ])

    const handlePrev = () => {
        setActiveProduct(activeProduct === 0 ? products.length - 1 : activeProduct - 1);
        handlePrevInfinityCarousel();
    };
    
    const handleNext = () => {
        setActiveProduct(activeProduct === maxMultipleCarousel ? 0 : activeProduct + 1);
        handleNextInfinityCarousel();
    };

    const handlePrevInfinityCarousel = () => {
        // if(activeProduct === 0) {
            // remove last item
            const newProducts = products.slice(0, products.length - 1);

            // add new item
            newProducts.unshift(products[products.length - 1]);

            // set products
            setProducts(newProducts);

            // set sliced products

            setSlicedProducts(newProducts.slice(0, maxMultipleCarousel));
        // }
    }

    const handleNextInfinityCarousel = () => { 
        // if(activeProduct === products.length - 1) {
            // remove first item
            const newProducts = products.slice(1, products.length);
            
            // add new item
            newProducts.push(products[0]);

            // set products
            setProducts(newProducts);

            // set sliced products
            setSlicedProducts(newProducts.slice(0, maxMultipleCarousel));
        // }
    }

    // watch window resize
    React.useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 768) {
                setStaticActiveProduct(0);
            } else {
                setStaticActiveProduct(1);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);

        }
    }, [])

    React.useEffect(() => {
        setSlicedProducts(products.slice(0, maxMultipleCarousel));
        if(window.innerWidth < 768) {
            setStaticActiveProduct(0);
        } else {
            setStaticActiveProduct(1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <>
            <div className="container_ourProduct bg_brown_1">
                <div className="ourProduct_header d_flex flex_row justify_between align_center">
                    <div className="color_brown_text_3">
                        <h3 className="ourProduct_title font_xl font_weight_400">OUR PRODUCTS</h3>
                        <p className="ourProduct_des font_3xl font_weight_700">This month's best seller</p>
                    </div>
                    <div>
                        <Button
                            text="SEE MORE"
                            className={'bg_brown_3 border_radius_3 btn_see_more'}
                            textClassName={'color_brown_text_2 font_sm font_weight_400'}
                        />
                    </div>
                </div>

                <div className="ourProduct_container_carousel">
                    <div ref={carouselRef} className="ourProduct_carousel d_flex flex_row">
                      {
                        slicedProducts.map((item, index) => (
                            <div key={item.id} className={`ourProduct_item_container`}>
                                <div key={item.id}  className={`ourProduct_item ${index === staticActiveProduct ? 'active_carousel_item' : ''}`} data-id={item.id}>
                                    <img className={`${index === staticActiveProduct ? 'active_carousel_item' : ''} product_img`} src={item.image} alt={item.name} />
                                    {
                                        index === staticActiveProduct ? (
                                            <div className={`ourProduct_item_content ${index === staticActiveProduct ? 'active_carousel_text' : ''}`} data-id={item.id}>
                                                <Button 
                                                    text={item.price}
                                                    style={{background: 'rgba(255, 255, 255, 0.50)'}}
                                                    className={'border_radius_3'}
                                                />
                                                <p className="color_white_text">{item.name}</p>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        ))
                      }
                    </div>
                </div>
                <div className="carousel_action d_flex">
                    <div>
                        <Button 
                            onClick={handlePrev}
                            icon={
                                <img src="./assets/icons/ico_arrow_forward.svg" alt="arrow-left" />
                            }
                            iconPosition="left"
                            isSquare={true}
                            className={'btn_prev bg_brown_3'}    
                        />
                    </div>
                    <div>
                        <Button 
                            onClick={handleNext}
                            icon={
                                <img src="./assets/icons/ico_arrow_forward.svg" alt="arrow-right" />
                            }
                            iconPosition="left"
                            isSquare={true}
                            className={'btn_next bg_brown_3'}    
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProducts;