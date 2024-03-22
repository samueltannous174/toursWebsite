import React, { useState, useMemo } from "react";
import './PostCard.css';

const PostCard = ({ tour, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    const renderTourCard = (imageUrl) => (
        <div className="postcard">
            <img className="img" src={imageUrl} alt={tour.name} />
            <div className="nameAndsalary">
                <div className="name">{tour.name}</div>
                <div className="price">${tour.price}</div>
            </div>
            <div className="paragraph">
                <p>
                    {readMore ? tour.info : tour.info.substring(0, 200)}...
                    <button className="btn" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show less' : 'Show more'}
                    </button>
                </p>
            </div>
            <div className="btn2c">
                <button className="btn2" onClick={() => removeTour(tour.id)}>Not interested</button>
            </div>
        </div>
    );

    const getImageUrl = useMemo(() => {
        switch (tour.name) {
            case "Best of Paris in 7 Days Tour":
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/402px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg";
            case "Best of Ireland in 14 Days Tour":
                return "https://www.planetware.com/wpimages/2019/09/ireland-in-pictures-most-beautiful-places-to-visit-hapenny-bridge-dublin.jpg";
            case "Best of Rome in 7 Days Tour":
                return "https://fullsuitcase.com/wp-content/uploads/2022/01/Best-views-and-viewpoints-in-Rome-Italy.jpg";
            case "Best of Salzburg & Vienna in 8 Days Tour":
                return "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRArM2acWC1QcB_KNiSqkRCtKeXtdje_b9_RuImLVOYxvNmZ4qp4OWRTspTQH1LT-ux";
            case "Best of Poland in 10 Days Tour":
                return "https://travel2next.com/wp-content/uploads/cities-in-poland-warsaw.jpg";
            default:
                console.error("Invalid tour name:", tour.name);
                return ""; // Default image URL or handle unknown cases
        }
    }, [tour.name]);

    const imageUrl = getImageUrl;

    return renderTourCard(imageUrl);
};

export default PostCard;
