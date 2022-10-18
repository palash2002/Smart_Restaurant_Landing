import React from 'react';
export default function Card() {

    let o = {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magnam!",
        name: "Paneer Punjabi Chicken",
        price: 200,
        type: "pata nahi"
    };
    let foodItems = [o, o, o, o, o, o, o, o, o, o];

    return (
        foodItems.map((foodItem) =>
            <div className='card'>
                <div className="card-left">
                    <img className="veg-or-non-veg" />
                    <div className="food-item-name">
                        {foodItem.name}
                    </div>
                    <div className="food-item-description">
                        {foodItem.description}
                    </div>
                    <div className="food-item-price">
                        {"₹"+foodItem.price}
                    </div>
                </div>
                <div className="card-right">
                    <img className='food-item-image' />
                    <div className="add-item">
                        ADD
                    </div>
                </div>
            </div>
        )
    );
}