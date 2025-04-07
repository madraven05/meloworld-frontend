import React from "react";
import logoTransparent from "../../assets/logo-transparent.png"
import { GoHomeFill } from "react-icons/go";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoLogOut, IoPeople } from "react-icons/io5";
import { useAuthStore } from "../stores/auth-store";



const DashboardSidebar: React.FC = () => {
  const clearAuth = useAuthStore(state => state.clearAuth);
  
    const menuItems = [
        {
            title: "Dashboard",
            icon: <GoHomeFill/>
        },
        {
            title: "Organizations",
            icon: <PiBuildingApartmentFill/>
        },
        {
            title: "Candidates",
            icon: <IoPeople/>
        },
        {
            title: "Email Management",
            icon: <PiBuildingApartmentFill/>
        },
        {
            title: "Settings",
            icon: <PiBuildingApartmentFill/>
        },
        {
            title: "Logout",
            onClick: () => {
              console.log("logging out")
              clearAuth()
            },
            icon: <IoLogOut/>
        },
    ]
  return (
    <div className="w-1/4 h-full lg:block bg-sky-900 backdrop-blur-lg shadow-2xl z-100">
      <div className="flex gap-2 justify-center border-b-2 border-secondary rounded-b-xl items-center">
        <img className="w-20 -ml-5" src={logoTransparent}/>
        <h1 className="text-secondary">Admin Portal</h1>
      </div>
      <div className="w-full flex flex-col px-8 mt-10 gap-5 items-center text-secondary">
        {menuItems.map((item, idx) => (
            <button onClick={() => item.onClick!()} key={idx} className="w-full hover:bg-secondary shadow-secondary hover:shadow-md hover:text-sky-900 p-2 rounded-xl transition duration-300 hover:translate-x-2 flex gap-2 items-center justify-start">
                {item.icon}
                <p>{item.title}</p>
            </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
