import React from 'react'
import './profile.scss'
import Sellersidebar from '../Sellerhome/Sellersidebar'
import Sellernavbar from '../Sellerhome/Sellernavbar'
import Chart from '../Sellerhome/Chart'
import Usertab from '../Selleruser/Usertab'




const Profile = () => {
  return (
    <div className='single'>
      <Sellersidebar/>
      <div className='singleContainer'>
        <Sellernavbar/>
        <div className="top">
          <div className="left">
            <div className="editbutton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
            
              <img
               src="https://i.ibb.co/sjHKRVV/imgperson.png"
              
                alt="" 
                className="itemImg"
                 />
                 <div className="details">
                  <h1 className="itemTitle">Ajith</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email</span>
                    <span className="itemValue">Ajith@gmail.com</span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">Phone</span>
                    <span className="itemValue">1548464484</span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">Address</span>
                    <span className="itemValue">kerela, Thissur</span>
                  </div>
                  <div className="detailItem">
                  <span className="itemKey">State</span>
                    <span className="itemValue">Thrissur</span>
                  </div>
                 </div>

            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title=" Last Transactions "/>

          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Recently Joined</h1>
          <Usertab />
        </div>

      </div>
    </div>
  )
}

export default Profile
