import React from 'react';
import MenuItem from '../../../Shared/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    return (
        <div>

            {
                title &&    <Cover img={img} title={title}></Cover>
            }


<div className='grid md:grid-cols-2 gap-3'>
                    {
                        items.map(item=><MenuItem key={item._id} item={item} ></MenuItem>)

                    }
                </div>
                <Link to={`/order/${title}`} >
                <button className='btn btn-primary'>Order Now</button>
                
                </Link>
              
            
        </div>
    );
};

export default MenuCategory;