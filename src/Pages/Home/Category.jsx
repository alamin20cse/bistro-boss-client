import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import pic1 from '../../assets/home/slide1.jpg'
import pic2 from '../../assets/home/slide2.jpg'
import pic3 from '../../assets/home/slide3.jpg'
import pic4 from '../../assets/home/slide4.jpg'
import pic5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Component/SectionTitle/SectionTitle';





const Category = () => {
    return (
        <div>
         <section>
         <SectionTitle
  subheading="Form 11.00am to 10.00pm"
  heading="Order Online"
/>


               
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={pic1}></img>
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h3>
        
         </SwiperSlide>
        <SwiperSlide><img src={pic2}></img> 
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide><img src={pic3}></img>
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>soups</h3>
         </SwiperSlide>
        <SwiperSlide><img src={pic4}></img> 
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Desart</h3>
        </SwiperSlide>
        <SwiperSlide><img src={pic5}></img> 
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h3>
        </SwiperSlide>
      
      </Swiper>
         </section>
            
        </div>
    );
};

export default Category;