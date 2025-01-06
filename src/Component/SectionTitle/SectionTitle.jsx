import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
      <div className='md:w-3/12 text-center my-8  mx-auto'>
       
        <p className='text-yellow-600 italic'>---{subheading}---</p>
        <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>
      </div>
    );
  };
  

export default SectionTitle;