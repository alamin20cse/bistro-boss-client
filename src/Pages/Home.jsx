import React from 'react';
import Bannar from './Home/Bannar';
import Category from './Home/Category';
import PopularMenu from './Home/PopularMenu/PopularMenu';
import Featured from './Home/Featured';
import Testimonial from './Home/Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Bannar></Bannar>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;