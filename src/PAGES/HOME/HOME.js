import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import EquipmentSection from './EquipmentSection';
import Footer from './Footer';
import Review from './Review';

const HOME = () => {
    return (
        <div className='max-w-7xl mx-auto px-10'>
          <Banner></Banner>
          <BusinessSummary></BusinessSummary>
          <EquipmentSection></EquipmentSection>
          <Review></Review>
          <Footer></Footer>

        </div>
    );
};

export default HOME;