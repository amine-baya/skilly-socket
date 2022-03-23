
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineCalendar, AiOutlineSetting } from "react-icons/ai";
import { FiVideo } from "react-icons/fi";


function TutorDashboard() {
  return (
    <>
      <div className="grid grid-cols-12 bg-orange-200 home-height">
        <div className="col-span-2 rounded-tr-[35px] bg-white abc">
          <p className="dashbord-logo">Dashboard</p>

          <div className="space-x-[35px] space-y-[12px]">
            <div></div>
            <div className="home-menu-item">
              <p className="home-side-list">
                <AiFillHome className="inline mr-2 home-side-icon" />
                home
              </p>
            </div>
            <div className="home-menu-item">
              <p className="home-side-list">
                <FiUser className="inline mr-2 home-side-icon" />
                my profile
              </p>
            </div>
            <div className="home-menu-item">
              <p className="home-side-list">
                <MdOutlineMessage className="inline mr-2 home-side-icon" />
                messages
              </p>
            </div>
            <div className="home-menu-item">
              <p className="home-side-list">
                <FaChalkboardTeacher className="inline mr-2 home-side-icon" />
                my Sessions
              </p>
            </div>
            <div className="home-menu-item">
              <p className="home-side-list">
                <AiOutlineSetting className="inline mr-2 home-side-icon" />
                settings
              </p>
            </div>
            <div className="home-menu-item">
              <p className="home-side-list">
                <FiVideo className="inline mr-2 home-side-icon" />
                my classroom
              </p>
            </div>
            <div className="home-menu-item">
              <p className="home-side-list">
                <AiOutlineCalendar className="inline mr-2 home-side-icon" />
                my calendar
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-8">
   
        </div>
        <div className="col-span-2 bg-yellow-200"></div>
      </div>
    </>
  )
}

export default TutorDashboard
