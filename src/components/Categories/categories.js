import React from "react";
import Category1 from "../../assets/img/statics/category_1.png";
import Jumbotron from "../../assets/img/statics/jumbotron_image_64.png";
import "./categories.modules.css";

const categories = [ 
    {
        id: 1,
        name: 'Bedroom',
        description: 'Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.',
        image: Category1
    },
    {
        id: 2,
        name: 'Living Room',
        description: 'Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.',
        image: Jumbotron
    },
    {
        id: 3,
        name: 'Home Office',
        description: 'Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.',
        image: Category1
    }, 
    {
        id: 4,
        name: 'Gaming Room',
        description: 'Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.',
        image: Category1
    }
]

const Categories = () => {
    const scrollContainerRef = React.useRef(null);
    const [activeCategory, setActiveCategory] = React.useState(categories[categories.length - 1].id);

    const handleChangeCategory = (category) => { 
        setActiveCategory(category.id);

        // scroll to active image
        if (scrollContainerRef?.current) {
            const activeImageElement = scrollContainerRef.current.querySelector(
              `.category_item_image[data-id="${category.id}"]`
            );
            if (activeImageElement) {
              activeImageElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
              });
            }
        }
    }

    return (
        <>
            <div className="section_categories d_flex flex_row flex_col_md justify_between">
                <div className="container_list_image">
                    <div className="category_list_image" ref={scrollContainerRef}>
                        {
                            categories.map((category, index) => {
                                return (
                                    <div key={index} className={`category_item_image`} data-id={category.id}>
                                        <img className={`category_image ${activeCategory === category.id ? 'active_image' : ''}`} src={category.image} alt={category.name} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="category_content d_flex flex_col">
                    <div className="category_content_title color_brown_text_1">
                        <h3>Categories</h3>
                        <p>Furniture Sets Recommendations</p>
                    </div>

                    <div className="category_list d_flex flex_col">
                        {
                            categories.map((category, index) => {
                                return (
                                    <div key={index} onClick={() => handleChangeCategory(category)} className={`category_item d_flex flex_col color_black_text ${activeCategory === category.id ? 'bg_brown_3 active_slider' : 'bg_gray_1'}`}>
                                        <p className="category_item_title">{category.name}</p>
                                        {
                                            activeCategory === category.id ? <p  className="category_item_description">{category.description}</p> : null
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
 }

 export default Categories;