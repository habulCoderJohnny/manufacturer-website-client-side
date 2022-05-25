import React, { useEffect, useState } from 'react';
import Equipment from './Equipment';

const EquipmentSection = () => {
    const [equipments,setEquipment] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/equitment')
        .then(res=>res.json())
        .then(data=>setEquipment(data))
    },[]);
    return (
        <section id='product'>
               <button class="btn gap-2 ">
            <h1 className='stat-value text-secondary'>Best Sellers <div class="badge badge-primary text-2xl">{equipments.length}</div></h1></button>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
               equipments.map(equipment =><Equipment key={equipment._id} equipment={equipment} ></Equipment>)
            }
            </div>
            
        </section>
    );
};

export default EquipmentSection;

