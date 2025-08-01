import React from "react";
import addpic_icon from "../../../../../../assets/icons/addpic-icon.svg";

const PerfumDetails = () => {
  return (
    <div className="">
      <div className="bg-[#E1F8F8] rounded-[30px] py-[24px] px-[32px] max-lg:p-[16px]">
        <h6 className="text-[20px] font-semibold text-[#352AA4]">
          User details
        </h6>

        <div className="mt-[16px] flex flex-col gap-[16px]">
          <div className=" flex gap-[20px] max-md:flex-wrap max-md:gap-[16px]">
            <div className="flex justify-center items-center border bg-white border-[#EFEFEF] rounded-2xl p-[16px] h-[170px] w-[170px]">
              <div className="flex flex-col justify-center items-center">
                <img src={addpic_icon} alt="" />
                <p className="text-[#666666] text-center">Add Perfum Pic</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">Perfum Name</span>
              <input
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              />
            </label>
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">
                Perfum Brand Name
              </span>
              <input
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              />
            </label>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">
                Perfum Category
              </span>
              <select
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              >
                <option value="">Flora</option>
                <option value="">Flora</option>
              </select>
            </label>
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">Year Release</span>
              <input
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="date"
                placeholder="Enter here"
              />
            </label>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">Concentration</span>
              <input
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              />
            </label>
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">Perfumer</span>
              <input
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              />
            </label>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">Concentration</span>
              <input
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              />
            </label>
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">Perfumer</span>
              <input
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              />
            </label>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap max-lg:flex-wrap">
            <div className="flex gap-[16px] w-full max-md:flex-wrap">
              <label className="flex flex-col w-full" htmlFor="">
                <span className="text-[#7C7C7C] text-[14px]">
                  Occasion (Day Time)
                </span>
                <input
                  className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                  type="text"
                  placeholder="Enter here"
                />
              </label>
              <label className="flex flex-col w-full" htmlFor="">
                <span className="text-[#7C7C7C] text-[14px]">
                  Occasion (Evening)
                </span>
                <input
                  className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                  type="text"
                  placeholder="Enter here"
                />
              </label>
            </div>
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">
                Fragrance Pyramid (Top)
              </span>
              <select
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              >
                <option value="">Bergamot </option>
                <option value="">Pepper</option>
              </select>
            </label>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">
                Fragrance Pyramid (Middle)
              </span>
              <select
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              >
                <option value="">Bergamot </option>
                <option value="">Pepper</option>
              </select>
            </label>
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">
                Fragrance Pyramid (Bottom)
              </span>
              <select
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              >
                <option value="">Bergamot </option>
                <option value="">Pepper</option>
              </select>
            </label>
          </div>
          <h4 className="text-[20px] font-medium">Season</h4>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">Winter</span>
              <select
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              >
                <option value="">0 </option>
                <option value="">10</option>
              </select>
            </label>
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">Summer</span>
              <select
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              >
                <option value="">0 </option>
                <option value="">10</option>
              </select>
            </label>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">Autumn</span>
              <select
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              >
                <option value="">0 </option>
                <option value="">10</option>
              </select>
            </label>
            <label className="flex flex-col w-full" htmlFor="">
              <span className="text-[#7C7C7C] text-[14px]">Spring</span>
              <select
                className=" bg-white border border-[#EEEEEE] rounded-2xl py-[14px] px-[18px]"
                type="text"
                placeholder="Enter here"
              >
                <option value="">0 </option>
                <option value="">10</option>
              </select>
            </label>
          </div>
          <h4 className="text-[20px] font-medium">Main Accords</h4>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <div className="w-full">
            <label className="">
              <span className="text-[#7C7C7C] text-[14px]">Aromatic</span>
            </label>
            <input
              id="range"
              type="range"
              className="cursor-pointer border-0 block w-full py-2 border-[#FFFFFF] rounded-md focus:border-[#FFFFFF] focus:outline-none accent-[#0E89DF]"
            />
          </div>
          <div className="w-full">
            <label className="">
              <span className="text-[#7C7C7C] text-[14px]">Fresh spicy</span>
            </label>
            <input
              id="range"
              type="range"
              className="cursor-pointer border-0 block w-full py-2 border-[#FFFFFF] rounded-md focus:border-[#FFFFFF] focus:outline-none accent-[#98DA46]"
            />
          </div>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <div className="w-full">
            <label className="">
              <span className="text-[#7C7C7C] text-[14px]">Warm spicy</span>
            </label>
            <input
              id="range"
              type="range"
              className="cursor-pointer border-0 block w-full py-2 border-[#FFFFFF] rounded-md focus:border-[#FFFFFF] focus:outline-none accent-[#EA4D18]"
            />
          </div>
          <div className="w-full">
            <label className="">
              <span className="text-[#7C7C7C] text-[14px]">Musky</span>
            </label>
            <input
              id="range"
              type="range"
              className="cursor-pointer border-0 block w-full py-2 border-[#FFFFFF] rounded-md focus:border-[#FFFFFF] focus:outline-none accent-[#F02D92]"
            />
          </div>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <div className="w-full">
            <label className="">
              <span className="text-[#7C7C7C] text-[14px]">Woody</span>
            </label>
            <input
              id="range"
              type="range"
              className="cursor-pointer border-0 block w-full py-2 border-[#FFFFFF] rounded-md focus:border-[#FFFFFF] focus:outline-none accent-[#DA6C1B]"
            />
          </div>
          <div className="w-full">
            <label className="">
              <span className="text-[#7C7C7C] text-[14px]">Herbal</span>
            </label>
            <input
              id="range"
              type="range"
              className="cursor-pointer border-0 block w-full py-2 border-[#FFFFFF] rounded-md focus:border-[#FFFFFF] focus:outline-none accent-[#A43DDB]"
            />
          </div>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <div className="w-full">
            <label className="">
              <span className="text-[#7C7C7C] text-[14px]">Citrus</span>
            </label>
            <input
              id="range"
              type="range"
              className="cursor-pointer border-0 block w-full py-2 border-[#FFFFFF] rounded-md focus:border-[#FFFFFF] focus:outline-none accent-[#D8DE1A]"
            />
          </div>
          <div className="w-full">
            <label className="">
              <span className="text-[#7C7C7C] text-[14px]">Lavander</span>
            </label>
            <input
              id="range"
              type="range"
              className="cursor-pointer border-0 block w-full py-2 border-[#FFFFFF] rounded-md focus:border-[#FFFFFF] focus:outline-none accent-[#EA61FF]"
            />
          </div>
          </div>
          <div className="flex gap-[16px] max-md:flex-wrap">
            <div className="w-[50%] max-md:w-full">
            <label className="">
              <span className="text-[#7C7C7C] text-[14px]">Amber</span>
            </label>
            <input
              id="range"
              type="range"
              className="cursor-pointer border-0 block w-full py-2 border-[#FFFFFF] rounded-md focus:border-[#FFFFFF] focus:outline-none accent-[#FF8D6B]"
            />
          </div>
          
          </div>
          
        </div>
      </div>
      <div className="flex justify-end gap-[16px] mt-[24px] flex-wrap">
        <button className="btn-sec">Remove Perfum</button>
        <button className="btn-pri">Edit</button>
      </div>
    </div>
  );
};

export default PerfumDetails;
