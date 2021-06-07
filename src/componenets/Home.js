import React from 'react';
import {fakedata} from '../fakedata';
import Footer from './Footer/Footer';
import './Home.css'

const Home = () => {
    return (
        <div className='main__home'>
            <div className="container text-center mt-5 home__container">
                <h2 className='mb-5'>Something New And Perfect</h2>
                <div className="row d-flex align-items-center">
               
                    {fakedata.map(item=>(
                        <div className="col-md-4 col-sm-12 d-flex  justify-content-center ">
                            <div style={{width:'300px', height:'300px', overflow:'hidden'}}  className="card  mb-3">
                                <img style={{width:'300px' , height:'200px'}} className="img-fluid " src={item.img} alt='' />
                                <h4 className='p-1 mt-2'>{item.title}</h4>
                                <p>{item.designation}</p>
                            </div>
                        </div>
                    ))}
                
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;