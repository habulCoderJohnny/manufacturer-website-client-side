import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import EquipmentSection from './EquipmentSection';
import Review from './Review';

const HOME = () => {
    return (
        <div>
          <Banner></Banner>
          <BusinessSummary></BusinessSummary>
          <Review></Review>
          <EquipmentSection></EquipmentSection>
        </div>
    );
};

export default HOME;