import React from 'react';
import Caroseal from './Caroseal';
import BusinessSummary from './BusinessSummary';
import ContactForm from './ContactForm';
import EquipmentSection from './EquipmentSection';
import Footer from './Footer';
import Review from './Review';

const HOME = () => {
    return (
        <div className='max-w-7xl mx-auto px-10'>
          <Caroseal></Caroseal>
          <BusinessSummary></BusinessSummary>
          <EquipmentSection></EquipmentSection>
          <Review></Review>
          <ContactForm></ContactForm>
          <Footer></Footer>

        </div>
    );
};

export default HOME;