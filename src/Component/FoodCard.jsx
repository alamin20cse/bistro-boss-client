import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <p className='bg-slate-900 text-white absolute right-0 p-4'>${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to card</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;