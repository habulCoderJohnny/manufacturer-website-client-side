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
        <section>
            <h1 className='text-center stat-value text-primary'>Popular Equipment {equipments.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
               equipments.map(equipment =><Equipment equipment={equipment} ></Equipment>)
            }
            </div>
            
        </section>
    );
};

export default EquipmentSection;

