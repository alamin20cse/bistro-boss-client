import React from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import featureimg from '../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white'>
            <section>

            <SectionTitle
                 subheading="check it out"
                heading="Featured item"
                
                >
               

                </SectionTitle>
                <div className='md:flex bg-slate-500 opacity-60 justify-center items-center  py-20 px-36'>
                    <div>
<img src={featureimg}></img>
                    </div>
                    <div className='md:ml-10'>
<p>Aug 20, 2029</p>
<p className='uppercase'>Where get</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima rerum placeat, recusandae pariatur vero accusamus? Impedit omnis ratione nesciunt aspernatur animi, quia, sunt, tenetur dolores nisi sint minus perspiciatis repellat!</p>
<button className='btn btn-outline border-0 border-b-4'>Order Now</button>

                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Featured;