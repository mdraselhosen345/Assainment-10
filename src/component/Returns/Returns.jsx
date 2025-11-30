import React from 'react';

const Returns = () => {
    return (
     <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <h1 className='text-2xl font-bold pb-4'>Sign in or create account</h1>
          <label className="label text-[15px]">Enter mobile number or email</label>
          <input type="email" className="input" placeholder="" />
          <button className="btn btn-neutral mt-4 bg-[#F54927] rounded-3xl">Coutinue</button>
        </fieldset>
        <div>
            <h2 className='text-lg font-bold text-[#ADADAD]'>Buying for work?</h2>
            <div>
                <a href="#" className='underline text-[#2E2EFF] text-[14px]'>Create a free business account</a>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Returns;