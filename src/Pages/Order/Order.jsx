import React, { useState } from 'react';

import orderpic from '../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../../Component/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories=['salad','pizza','soup','dessert','drinks'];
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)

    const [tabIndex,setTabIndex]=useState(initialIndex);
    const [menu]=useMenu();
   
    // console.log(category)



    const desserts=menu.filter(item=>item.category==='dessert');
    const soup=menu.filter(item=>item.category==='soup');
    const salad=menu.filter(item=>item.category==='salad');
    const pizza=menu.filter(item=>item.category==='pizza');
    const offered=menu.filter(item=>item.category==='offered');
    const drinks=menu.filter(item=>item.category==='drinks');
    return (
        <div>
            <Helmet>
                <title>Bistor Boss | Order Food

                </title>
            </Helmet>
            <Cover img={orderpic}  title={'Our food'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>salad</Tab>
    <Tab>pizza</Tab>
    <Tab>soup</Tab>
    <Tab>dessert</Tab>
    <Tab>drink</Tab>



  </TabList>
  <TabPanel>
   <OrderTab items={salad}></OrderTab>

  </TabPanel>
  <TabPanel>
    <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={desserts}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
            
            
        </div>
    );
};

export default Order;