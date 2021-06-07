import React from 'react';
import Footer from '../Footer/Footer';
import './Signup.css'
const Signup = () => {
    return (
        <section className="text-center signup__section">
        
          <div className='d-flex justify-content-center mb-5'>
            <div style={{marginTop:'100px', width:"70%", padding:"20px"}}
             className="card text-center justify-content-center align-items-center">
             <h3>Sign Up</h3>
           <form className='w-50'>
           <div className="mb-3 ">
             Email: <input className='form-control ' type="email"   placeholder="name@example.com" />
           </div>
           <div className="mb-3">
             Password : <input className='form-control ' type="password" placeholder='password'  />
           </div>
           <button style={{backgroundColor:'none', border:'1px solid gray', }} className="btn w-100 1 my-3">
             <span className='border1'> Resister</span> </button>
           </form>
           <div>
            <h3>Sign up  with Google</h3>
              <button style={{backgroundColor:'none', border:'1px solid gray'}} className="btn w-100 border my-3">
             <span></span> Google Sign in </button>
           
              </div>  
            </div>
            </div>
          <div className="signup__footer">
          <Footer />
          </div>
      </section>
    );
};

export default Signup;