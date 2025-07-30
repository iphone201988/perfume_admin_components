import React from 'react'
import edit_icon from '../../../../assets/icons/edit-icon.svg'

const ManageQuiz = () => {
  return (
    <div>
      <div className="tabs flex gap-[24px] mb-[16px]">
        <button className='btn-pri'>Classic Trivia</button>
        <button className='btn-sec'>Scent or Not?</button>
        <button className='btn-sec'>Guess the Bottle</button>
      </div>

<div className='bg-[#E1F8F8] rounded-[30px] py-[24px] px-[32px] max-lg:p-[16px]'>
      <div className="flex justify-between items-center flex-wrap max-md:gap-[12px]">
        <h6 className='text-[20px] font-semibold text-[#352AA4]'>Classic Trivia Questions</h6>
        <div className="flex gap-[16px] flex-wrap">
           <div className="flex items-center gap-[6px]">
            <span className='w-[24px] h-[24px] rounded-full bg-[#F6595A] flex'></span>
            <p className='text-[18px] font-medium text-[#7C7C7C]'>Wrong Answer</p>
           </div>
           <div className="flex items-center gap-[6px]">
            <span className='w-[24px] h-[24px] rounded-full bg-[#0CDD39] flex'></span>
            <p className='text-[18px] font-medium text-[#7C7C7C]'>Correct Answer</p>
           </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-[4px]">
      <div className=" border-b border-[rgba(21,201,201,0.50)] py-[20px]">
        <div className="flex items-center justify-between">
          <p className='text-[20px] font-medium text-[#7C7C7C]'> <span className='text-[#4896FF]'>Q1.</span>Which note is often used in fresh perfumes?</p>
          <div className="flex items-center gap-[6px]">
            <img src={edit_icon} alt="" />
            <span className=' text-[#352AA4]'>edit question</span>
          </div>
        </div>
        <div className="flex gap-[24px] flex-wrap max-md:gap-[16px] mt-[12px] ml-[30px]">
          <p className='text-[18px] text-[#0CDD39] font-medium'>Sandalwood</p>
          <p className='text-[18px] text-[#F6595A] font-medium'>Amber</p>
          <p className='text-[18px] text-[#F6595A] font-medium'>Bergamot</p>
          <p className='text-[18px] text-[#F6595A] font-medium'>Patchouli</p>
        </div>
      </div>
      <div className=" border-b border-[rgba(21,201,201,0.50)] py-[20px]">
        <div className="flex items-center justify-between">
          <p className='text-[20px] font-medium text-[#7C7C7C]'> <span className='text-[#4896FF]'>Q2.</span>Which note is often used in fresh perfumes?</p>
          <div className="flex items-center gap-[6px]">
            <img src={edit_icon} alt="" />
            <span className=' text-[#352AA4]'>edit question</span>
          </div>
        </div>
        <div className="flex gap-[24px] flex-wrap max-md:gap-[16px] mt-[12px] ml-[30px]">
          <p className='text-[18px] text-[#0CDD39] font-medium'>Sandalwood</p>
          <p className='text-[18px] text-[#F6595A] font-medium'>Amber</p>
          <p className='text-[18px] text-[#F6595A] font-medium'>Bergamot</p>
          <p className='text-[18px] text-[#F6595A] font-medium'>Patchouli</p>
        </div>
      </div>
      </div>
   

<div className="flex items-center justify-between mt-4">

  <nav className="inline-flex gap-1">
 
    <button className="px-3 py-1 bg-[#fff] rounded-[4px] text-[#352AA4] ">
      Previous
    </button>
    

    <button className="active px-3 py-1 bg-[#352AA4] rounded-[4px] text-sm text-[#fff] cursor-pointer ">1</button>
    <button className="px-3 py-1 bg-white rounded-[4px] text-sm text-[#352AA4] cursor-pointer ">2</button>
    <button className="px-3 py-1 bg-white rounded-[4px] text-sm text-[#352AA4] cursor-pointer ">3</button>
    <span className="px-3 py-1 text-sm text-gray-500">...</span>
    <button className="px-3 py-1 bg-white rounded-[4px] text-sm text-[#352AA4] cursor-pointer ">10</button>


    <button className="px-3 py-1 bg-white rounded-[4px] text-sm text-[#352AA4] cursor-pointer rounded-r-md ">
      Next
    </button>
  </nav>
</div>
    </div> 
    </div>
  )
}

export default ManageQuiz
