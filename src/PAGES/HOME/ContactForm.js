import React from 'react';
// import appointment from '../../assets/images/appointment.png';
const ContactForm = () => {
    return (
        <div className="my-16 p-10 " style={{background: `url("https://mosaiccounselling.co.uk/wp-content/uploads/2021/08/contact-powershop-stoddart-1024x478-1.jpg")`, backgroundSize:'cover'}} id="who-we-are">
          <div className="hero-overlay bg-opacity-50"></div>
          <div className='text-center text-primary font-bold mb-7'>
          <h4 className='text-xl'>Contact Us</h4>
            <h1 className='text-5xl text-blue-600'>Stay connected with us</h1>
          </div>
            <form className="sm:max-w-sm lg:max-w-lg mx-auto textarea-primary shadow-2xl">
              <div className="form-control text-xl">
                <input type="email" placeholder="Email Address" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <input type="text" placeholder="Subject" className="input input-bordered my-5" />
              </div>
              <div className="form-control">
              <textarea className="textarea textarea-success" placeholder="Your message"></textarea>
              </div>
              <div className="form-control">
                <button className="btn text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 my-5">Submit</button>
              </div>
          </form>
      </div>
    );
};

export default ContactForm;

