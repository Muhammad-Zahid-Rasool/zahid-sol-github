import React from "react";
import Marquee from "react-fast-marquee";
const BrandAreaOne = () => {
  return (
    <div className='about-area bg-gray pt-5 pb-5'>
      <div className='container'>
      <div className='section-title text-center'>
            <h6 className='sub-title'>OUR EXPERTISE</h6>
            <h2 className='title'>
              <span>Technologies</span> 
            </h2>
          </div>

        <div className='client-slider'>
          <Marquee gradient={false}>
            
            <div className='thumb'>
              <img src='assets/img/tech/dotnet.png' alt='dotnet'/>
            </div>
            <div className='thumb'>
              <img src='assets/img/tech/node.png' alt='node'/>
            </div>
            <div className='thumb'>
              <img src='assets/img/tech/laravel.png' alt='laravel'/>
            </div>
            <div className='thumb'>
              <img src='assets/img/tech/django.svg' alt='django' height={35} width={50}/>
            </div>
            <div className='thumb'>
              <img src='assets/img/tech/react.png' alt='react'/>
            </div>
            <div className='thumb'>
              <img src='assets/img/tech/next.png' alt='next' height={30} width={40}/>
            </div>
            <div className='thumb'>
              <img src='assets/img/tech/mongodb.png' alt='mongodb'/>
            </div>
            <div className='thumb'>
              <img src='assets/img/tech/sqlserver6.png'alt='sqlserver' height={35} width={65}/>
            </div>
            <div className='thumb'>
              <img src='assets/img/tech/tailwind.png' alt='tailwind' height={30} width={50}/>
            </div><div className='thumb'>
              <img src='assets/img/tech/bootstrap.png' alt='bootstrap'height={40} width={40}/>
            </div>
       
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandAreaOne;
