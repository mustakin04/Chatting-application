import React from 'react'
import Sliderbar from '../../Components/Sliderbar/Sliderbar';
import GroupList from '../../Components/GroupList/GroupList';
import Friends from '../../Components/Friends/Friends';


const Home = () => {
  return (
    <div className='flex'>
     <Sliderbar></Sliderbar>
      {/* Group list and Friend Request */}
      <GroupList></GroupList>
      <Friends></Friends>
    </div>
  )
}

export default Home