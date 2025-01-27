import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    // const [menu,setMenu]=useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data.filter(item=>item.category==='popular')
    //         setMenu(popularItems);
    //     })
    // },[])
    // console.log(menu)

    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category==='popular');


    return (
        <div>
            <section>
                <SectionTitle
                 subheading="Popular Item"
                heading="Form our Menue"
                
                >
               

                </SectionTitle>
                <div className='grid md:grid-cols-2 gap-3'>
                    {
                        popular.map(item=><MenuItem key={item._id} item={item} ></MenuItem>)

                    }
                </div>


            </section>
            
        </div>
    );
};

export default PopularMenu;