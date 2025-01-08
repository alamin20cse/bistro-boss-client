import React from 'react';
import FoodCard from '../../Component/FoodCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {
  return (
    <div>
      {items.length === 0 ? (
        <p className="text-center text-gray-500">No items available in this category.</p>
      ) : (
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item._id}>
              <FoodCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default OrderTab;
