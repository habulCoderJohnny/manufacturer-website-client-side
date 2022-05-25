import { faGlobe, faPeopleGroup, faTruck, faTruckMonster, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <p class="mb-5"><FontAwesomeIcon icon={faGlobe} class="w-40 text-green-400"></FontAwesomeIcon></p>
                        <h1 class="text-5xl font-bold"><span class="font-mono text-6xl">
                            <span>30</span>
                        </span></h1>
                        <p class="uppercase text-xl">Countries</p>
                    </div>
                </div>
            </div>
         
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <p class="mb-5"><FontAwesomeIcon icon={faTruck} class="w-40 text-green-400"></FontAwesomeIcon></p>
                        <h1 class="text-5xl font-bold "><span class="font-mono text-6xl">
                            <span>536+</span>
                        </span></h1>
                        <p class="uppercase text-xl">Home Delivery</p>
                    </div>
                </div>
            </div>
         
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <p class="mb-5"><FontAwesomeIcon icon={faPeopleGroup} class="w-40 text-green-400"></FontAwesomeIcon></p>
                        <h1 class="text-5xl font-bold"><span class="font-mono text-6xl">
                            <span>1000+</span>
                        </span></h1>
                        <p class="uppercase text-xl">happy clienet</p>
                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default BusinessSummary;