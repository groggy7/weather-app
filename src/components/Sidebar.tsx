import React from "react";
import umbrella from "../assets/umbrella.svg";
import weather from "../assets/weather.svg";
import cities from "../assets/cities.svg";
import map from "../assets/map.svg";
import settings from "../assets/settings.svg";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return <div className="bg-[#202B3B] w-20 rounded-3xl text-[#9197A0] h-full flex flex-col items-center gap-12 p-4 min-h-220">
        <img src={umbrella} alt="umbrella" />
        <div className="flex flex-col gap-6">
            <NavLink to='/' className={({ isActive }) => `flex flex-col items-center gap-2 ${
                isActive ? 'text-[#c4cad3] font-semibold [&>img]:brightness-200' : ''
            }`}>
                <img src={weather} alt="weather" />
                <span>Weather</span>            
            </NavLink>
            <NavLink to='/cities' className={({ isActive }) => `flex flex-col items-center gap-2 ${
                isActive ? 'text-[#c4cad3] font-semibold [&>img]:brightness-200' : ''
            }`}>
                <img src={cities} alt="cities" />
                <span>Cities</span>
            </NavLink>
            <NavLink to='/map' className={({ isActive }) => `flex flex-col items-center gap-2 ${
                isActive ? 'text-[#c4cad3] font-semibold [&>img]:brightness-200' : ''
            }`}>
                <img src={map} alt="map" />
                <span>Map</span>
            </NavLink>
            <NavLink to='/settings' className={({ isActive }) => `flex flex-col items-center gap-2 ${
                isActive ? 'text-[#c4cad3] font-semibold [&>img]:brightness-200' : ''
            }`}><img src={settings} alt="settings" />
                <span>Settings</span>
            </NavLink>
        </div>
    </div>;
}