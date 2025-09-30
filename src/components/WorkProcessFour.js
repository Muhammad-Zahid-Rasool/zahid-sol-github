import React from "react";

const WorkProcessFour = () => {
  return (
    <>
      {/*==================== Work Process Three start ====================*/}
      <div
        className='work-process-area bg-position-right pd-top-90 pd-bottom-90'
        style={{ backgroundImage: 'url("./assets/img/bg/16.png")' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center pb-5'>
                <h6 className='sub-title-sky-blue'>WORK PROCESS</h6>
                <h2 className='title'>
                Four Typical Steps
                </h2>
              </div>
            </div>
          </div>
          <div className='work-process-area-inner-2'>
            <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <div className='single-work-process-inner style-2 text-center'>
           
                  <div className='thumb mb-3'>
                    <img src='assets/img/icon/36.svg' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Requirements Gathering & Analysis</h5>
                    <p className='content' style={{ textAlign: 'justify' }}>
                    Understanding user needs, defining project goals, and documenting software requirements.
                  


                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-work-process-inner style-2 text-center'>
              
                  <div className='thumb mb-3'>
                    <img src='assets/img/icon/37.svg' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Design & Development</h5>
                    <p className='content'style={{ textAlign: 'justify' }}>
                    
                    Transforming user requirements into a visual blueprint and then coding it to make a functional sofware.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-work-process-inner style-2 text-center'>
             
                  <div className='thumb mb-3'>
                    <img src='assets/img/icon/38.svg' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Testing, Debugging & Quality Esurance</h5>
                    <p className='content'style={{ textAlign: 'justify' }}>
                    Software is tested to ensure the software meets the desired quality standards with no bugs.
                    
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-work-process-inner style-2 text-center'>
                  <div className='thumb mb-3'>
                    <img src='assets/img/icon/39.svg' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Deployment & Maintenance</h5>
                    <p className='content' style={{ textAlign: 'justify' }}>
                    Deploying the software to the production environment and then keeping it updated and running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Work Process Three end ====================*/}
    </>
  );
};

export default WorkProcessFour;
