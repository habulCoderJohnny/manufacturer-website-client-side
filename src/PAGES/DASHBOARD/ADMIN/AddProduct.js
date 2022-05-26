import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStorageKey = '19e2b81b63bfc80835898c72112aa3a1';

    const onSubmit = async data => {
        //user inputted img stored to a third party server
        console.log('form:', data);
        const inputImg = data.image[0];
        const formData = new FormData(); 
        formData.append('image', inputImg);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            console.log('imgbb', result);
            if (result.success) {
                const image = result.data.url;
                const addProduct = {
                    name: data.name,
                    price: data.price,
                    minQty: data.minQty,
                    maxQty: data.maxQty,
                    img: image
                } 
                //SEND TO DATABASE
                fetch('http://localhost:5000/equitment',{
                    method: 'POST',
                    headers:{'content-type': 'application/json',    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(addProduct)
                })
                .then(res=>res.json())
                .then(inserted =>{
                    console.log('doctor image sent',inserted);
                    if (inserted.insertedId) {
                        toast.success('Product added in home page')
                        reset();
                    }
                    else{
                        toast.error('Adding failed try later!')
                    }
                })
            }
        })

    }

    return (
        <div>
             <h1 className='text-center text-5xl'>Add a <small className='text-[#007C92]'>Product</small></h1>


                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 justify-items-center my-5 text-secondary">

                    <div className="form-control">


                        <input type="text" required placeholder="Item name" className="input input-primary text-xl" {...register("name")} />
                    </div>
                    <div className="form-control">


                        <input type="name" required placeholder="price" className="input input-primary text-xl" {...register("price")} />
                    </div>

                    <div className="form-control">


                        <input type="number" required placeholder="max qty" className="input input-primary text-xl" {...register("maxQty")} /> </div>

                    <div className="form-control">
                        <input type="number" required placeholder="Min qty" className="input input-primary text-xl" {...register("minQty")} /> 
                    </div>
                    <div className="form-control">
                        <textarea type="text" placeholder="description (optional)" className="input input-primary text-xl" {...register("description")} /> 
                    </div>


                    <div className="form-control">
                        <input type="file" required className="input input-bordered pt-1" {...register("image")} />
                    </div>

                    <div className="form-control">
                        <button type="submit"
                            className="btn btn-primary text-white">Add prduct</button> 
                    </div>
                </form>



        </div>
    );
};

export default AddProduct;
