import React from 'react';
import Bannar from './Home/Bannar';
import Category from './Home/Category';
import PopularMenu from './Home/PopularMenu/PopularMenu';


const Home = () => {
    return (
        <div>
          
            <Bannar></Bannar>
            <Category></Category>
           <PopularMenu></PopularMenu>
           
            
        </div>
    );
};

export default Home;