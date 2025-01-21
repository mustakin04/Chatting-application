import React from 'react'
import Sliderbar from '../../Components/Sliderbar/Sliderbar'
import GroupList from '../../Components/GroupList/GroupList'
import ChatBox from '../../Components/ChatBox/ChatBox'

const Massage = () => {
  return (
    <div className='flex gap-[40px]'>
        <Sliderbar active="msg"></Sliderbar>
        <GroupList></GroupList>
        <div className='w-[715px]'>
          <ChatBox></ChatBox>
        </div>
    </div>
  )
}

export default Massage