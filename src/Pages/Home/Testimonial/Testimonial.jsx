import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';


import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews,setreviews]=useState([]);

   useEffect(()=>{
    fetch('review.json')
    .then(res=>res.json())
    .then(data=>{
        setreviews(data)
    })
   },[])

    console.log(reviews);





    return (
        <section>
            <SectionTitle 
            subheading='What Our Client Say'
            heading={'Testimonials'}

            
            >

            </SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       


{
    reviews.map(review=> 
    <SwiperSlide key={review._id} >
        
        
      <div className='m-24 flex flex-col items-center'>

        
      <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
        <p>{review.details}</p>
        <h3 className='text-2xl text-orange-400 '>{review.name}</h3>
      </div>
        
        </SwiperSlide>)
} 

       
      </Swiper>
            
        </section>
    );
};

export default Testimonial;