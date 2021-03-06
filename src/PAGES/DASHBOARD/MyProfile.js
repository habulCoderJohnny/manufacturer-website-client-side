import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../SHARED/Loading/Loading';
import img from '../../assets/images/profile.png';
import useAdmin from '../../Hooks/useAdmin';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);


    const { register,  handleSubmit, reset } = useForm();

    const onSubmit = async data => {

        const profileInfo = {
            email: data.email,
            name: data.name,
            contractNo: data.phone,
            skill: data.skill,
            education: data.edu,
            yourself: data.self,
            linkedin: data.linkedin,
        }

        //SEND TO DATABASE
        fetch("http://localhost:5000/profile", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profileInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(' YOUR profie change successfully data saved to database')
                    reset();
                }
                else {
                    toast.error('profie change failed try again!')
                }
            });
    

}

return (
    <div className='grid grid-cols-1 gap-4 justify-items-center my-4'>
        {admin ? <h1 className='stat-value text-blue-500'>Admin Profile</h1> :
            <h1 className='stat-value text-purple-500'>User Profile</h1>}
        {loading && <Loading></Loading>}
        <div class="min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                {
                    user?.photoURL ? <img src={user?.photoURL} className="w-24 mx-auto mask mask-hexagon
                        shadow-2xl" alt=""  /> :
                        <img src={img} className="w-24 mx-auto mask mask-hexagon" alt=""/>
                }
                <div className='font-mono'>
                    <h1 className='text-xl'>Name:</h1>
                    <h1 className='my-1'>{user?.displayName}</h1>
                    <h1 className='text-xl'>Email:</h1>
                    <h1> {user?.email}</h1>
                    <label htmlFor="profile-modal"
                        className="btn btn-sm text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">Edit profile</label>
                </div>
            </div>
        </div>
        {/* MODAL SECTION  */}
        <div >
            <input type="checkbox" id="profile-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle pt-20">
                <div className="modal-box">
                    <label htmlFor="profile-modal" className="btn bg-[#0c55b6] btn-sm btn-circle absolute right-8 top-5">???</label>
                    {
                        user?.photoURL ? <img src={user?.photoURL} className="w-24 mx-auto mask mask-hexagon
                        shadow-2xl" alt="" srcset="" /> :
                            <img src={img} className="w-24 mx-auto mask mask-hexagon" alt="" srcset="" />
                    }
                    <h3 className="font-bold text-lg text-secondary text-center">Edit Profile
                    </h3>

                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <input defaultValue={user?.displayName || ''}
                            type="text" name='name' className="input input-bordered w-full max-w-xs" required  {...register("name")} />



                        <input defaultValue={user?.email || ''} type="email" name='email' className="input input-bordered w-full max-w-xs" {...register("email")} required />

                        <input type="text" name='phone' required placeholder="your Phone number" className="input input-bordered w-full max-w-xs"  {...register("phone")} />


                        <input type="text" name='edu' required placeholder="Education Level" className="input input-bordered w-full max-w-xs"  {...register("edu")} />


                        <select name='skill' className="select select-accent w-full max-w-xs" required  {...register("skill")} >
                            <option selected disabled>Skillset</option>
                            <option>Web developer</option>
                            <option>Frontend Developer</option>
                            <option>Backend Developer</option>
                            <option>Mern stack Developer</option>
                            <option>Full stack Developer</option>
                        </select>


                        <input type="text" name='self' required
                            placeholder="tell us yourself" className="input input-bordered w-full max-w-xs"  {...register("self")} />



                        <input type="text" name='linkedin' required
                            placeholder="Your linkedin profile link" className="input input-bordered w-full max-w-xs"  {...register("linkedin")} />


                        <input type="submit" value="Update profile" className="btn btn-sm text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700" />
                    </form>
                </div>
            </div>
        </div>

    </div>




);
};

export default MyProfile;


