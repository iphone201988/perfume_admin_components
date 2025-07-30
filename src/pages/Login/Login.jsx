import React from 'react'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='h-[100vh] bg-[#D4F4F4] flex justify-center items-center p-[16px]'>
      <div className=" bg-white max-w-[520px] w-full p-[20px] rounded-2xl">

 <div className=" flex flex-col gap-[16px]">
                 <div className="">
                    <img className='max-w-[240px] block mx-auto mb-[20px]' src={logo} alt="" />
                    <h2 className='text-[24px] font-bold text-[#352AA4] text-center'>Admin Login</h2>
                    <p className='text-[16px] text-center'>Enter your email & password to login</p>
                 </div>
                  <div className="flex gap-[12px] max-md:flex-wrap">
                    <label className='flex flex-col w-full' htmlFor="">
                        <span className='text-[#7C7C7C] text-[14px]'>Email</span>
                        <input className='border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]' type="email" placeholder='Enter Email' />
                    </label>
                  </div>
                  <div className="flex gap-[12px] max-md:flex-wrap">
                    <label className='flex flex-col w-full' htmlFor="">
                        <span className='text-[#7C7C7C] text-[14px]'>Password</span>
                        <input className='border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]' type="password" placeholder='Enter Password' />
                    </label>
                  </div>
                  <button className='btn-pri mt-[12px]'>Login</button>
              </div>

      </div>
    </div>
  )
}

export default Login
