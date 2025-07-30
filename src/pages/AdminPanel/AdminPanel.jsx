import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import ManageUsers from './components/ManageUsers/ManageUsers'
import ManageUserPopup from './components/ManageUsers/components/ManageUserPopup'
import ManagePerfum from './components/ManagePerfum/ManagePerfum'
import PerfumDetailPopup from './components/ManagePerfum/components/PerfumDetailPopup/PerfumDetailPopup'
import AddPerfumPopup from './components/ManagePerfum/components/AddPerfumPopup/AddPerfumPopup'
import ManageQuiz from './components/ManageQuiz/ManageQuiz'
import ClassicTriviaPopup from './components/ManageQuiz/components/ClassicTriviaPopup/ClassicTriviaPopup'
import ScentOrNotPopup from './components/ManageQuiz/components/ScentOrNotPopup/ScentOrNotPopup'
import GuessTheBottlePopup from './components/ManageQuiz/components/GuessTheBottlePopup/GuessTheBottlePopup'

const AdminPanel = () => {
  return (
     <div>
      <SideBar/>

   <main className='ml-[320px] absolute w-[calc(100%-320px)] min-h-[100vh] top-[0]  bg-[#ffff] max-lg:w-full max-lg:ml-0'>
    <Header/>

    <div className="p-[32px]">
        {/* <Dashboard/> */}
        {/* <ManageUsers/> */}
        {/* <ManagePerfum/> */}
        <ManageQuiz/>
    </div>

  </main>

{/* popups */}
{/* <ManageUserPopup/> */}
{/* <PerfumDetailPopup/> */}
{/* <AddPerfumPopup/> */}
{/* <ClassicTriviaPopup/> */}
{/* <ScentOrNotPopup/> */}
<GuessTheBottlePopup/>
    </div>
  )
}

export default AdminPanel
