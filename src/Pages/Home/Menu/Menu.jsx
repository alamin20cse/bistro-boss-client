import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuimg from '../../../assets/menu/menu-bg.jpg'
import desaerimg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../../assets/menu/pizza-bg.jpg'
import saladimg from '../../../assets/menu/salad-bg.jpg'
import soupimg from '../../../assets/menu/soup-bg.jpg'




import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';


const Menu = () => {
    const [menu]=useMenu();
    const desserts=menu.filter(item=>item.category==='dessert');
    const soup=menu.filter(item=>item.category==='soup');
    const salad=menu.filter(item=>item.category==='salad');
    const pizza=menu.filter(item=>item.category==='pizza');
    const offered=menu.filter(item=>item.category==='offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* cover Main */}
            <Cover img={menuimg} title={'Our Menu'}></Cover>

{/* offered  */}
            <SectionTitle subheading={"Don't Miss"} heading={'Todays offer'}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* deasurt */}

            <MenuCategory items={desserts} title={"dessert"}
            img={desaerimg}
            ></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title={"pizza"}
            img={pizzaimg}
            ></MenuCategory>
            {/* slad */}
            <MenuCategory items={salad} title={"salad"}
            img={saladimg}
            ></MenuCategory>
            
            {/* soup */}
            <MenuCategory items={soup} title={"soup"}
            img={soupimg}
            ></MenuCategory>
            

           


          
        </div>
    );
};

export default Menu;