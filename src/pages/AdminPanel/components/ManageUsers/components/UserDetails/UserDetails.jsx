import React from "react";
import addpic_icon from "../../../../../../assets/icons/addpic-icon.svg";

const UserDetails = () => {
  return (
    <div className="">
      <div className="bg-[#E1F8F8] rounded-[30px] py-[24px] px-[32px] max-lg:p-[16px]">
      <h6 className="text-[20px] font-semibold text-[#352AA4]">User details</h6>

      <div className="mt-[16px] flex flex-col gap-[16px]">
        <div className=" flex gap-[20px] max-md:flex-wrap max-md:gap-[16px]">
          <div className="flex justify-center items-center border bg-white border-[#EFEFEF] rounded-2xl p-[16px] h-[170px] w-[170px]">
            <div className="flex flex-col justify-center items-center">
              <img src={addpic_icon} alt="" />
              <p className="text-[#666666] text-center">Add Perfum Pic</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] bg-white border-[#EFEFEF] border p-[20px] rounded-2xl w-full max-w-[300px] max-md:max-w-full">
            <div className="flex justify-between">
              <p className="text-[#7C7C7C]">Status</p>
              <p className="text-[#6AE66F] font-medium ">Active </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#7C7C7C]">Following</p>
              <p className="text-[#352AA4] font-medium ">12</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#7C7C7C]">Followers</p>
              <p className="text-[#352AA4] font-medium ">42</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#7C7C7C]">Rank points</p>
              <p className="text-[#352AA4] font-medium ">1,500</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[16px] max-md:flex-wrap">
          <label className="flex flex-col w-full" htmlFor="">
            <span className="text-[#7C7C7C] text-[14px]">User Name</span>
            <input
              className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
              type="text"
              placeholder="Enter here"
            />
          </label>
          <label className="flex flex-col w-full" htmlFor="">
            <span className="text-[#7C7C7C] text-[14px]">Email</span>
            <input
              className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
              type="text"
              placeholder="Enter here"
            />
          </label>
        </div>
        <div className="flex gap-[16px] max-md:flex-wrap">
          <label className="flex flex-col w-full" htmlFor="">
            <span className="text-[#7C7C7C] text-[14px]">Gender</span>
            <select
              className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
              type="text"
              placeholder="Enter here"
            >
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>
          </label>
          <label className="flex flex-col w-full" htmlFor="">
            <span className="text-[#7C7C7C] text-[14px]">Date of birth</span>
            <input
              className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
              type="date"
              placeholder="Enter here"
            />
          </label>
        </div>
        <div className="flex gap-[16px] max-md:flex-wrap">
          <label className="flex flex-col w-full" htmlFor="">
            <span className="text-[#7C7C7C] text-[14px]">Which smells user enjoy the most</span>
            <select
              className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
              type="text"
              placeholder="Enter here"
            >
              <option value="">Fresh</option>
              <option value="">Sweet</option>
              <option value="">Woody</option>
            </select>
          </label>
          <label className="flex flex-col w-full" htmlFor="">
            <span className="text-[#7C7C7C] text-[14px]">Main reason user wear perfume</span>
            <select
              className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
              type="text"
              placeholder="Enter here"
            >
              <option value="">Dates</option>
              <option value="">Office</option>
              <option value="">Regular</option>
            </select>
          </label>
          
        </div>
        <div className="flex gap-[16px] max-md:flex-wrap">
          <label className="flex flex-col w-full" htmlFor="">
            <span className="text-[#7C7C7C] text-[14px]">User usually spend on a bottle of perfume</span>
            <select
              className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
              type="text"
              placeholder="Enter here"
            >
              <option value="">$100 - $200</option>
              <option value="">$200 - $300</option>
            </select>
          </label>
          <label className="flex flex-col w-full" htmlFor="">
            <span className="text-[#7C7C7C] text-[14px]">light perfumes or strong ones</span>
            <select
              className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
              type="text"
              placeholder="Enter here"
            >
              <option value="">Light</option>
              <option value="">Strong</option>
            </select>
          </label>
          
        </div>
         <div className="flex gap-[16px] max-md:flex-wrap">
          <label className="flex flex-col w-full" htmlFor="">
            <span className="text-[#7C7C7C] text-[14px]">Where did you hear about us?</span>
            <input
              className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
              type="text"
              placeholder="Enter here"
            />
          </label>
          <label className="flex flex-col w-full" htmlFor="">
            <span className="text-[#7C7C7C] text-[14px]">Joined</span>
            <input
              className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
              type="text"
              placeholder="Enter here"
            />
          </label>
        </div>
      </div>
    </div>
    <div className="flex justify-end gap-[16px] mt-[24px] flex-wrap">
            <button className='btn-sec'>Suspend / Reactivate</button>
            <button className='btn-sec'>Delete User</button>
            <button className='btn-pri'>Edit</button>
        </div>
    </div>
  );
};

export default UserDetails;
