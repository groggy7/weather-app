import React from "react";
import umbrella from "../assets/umbrella.svg";
import weather from "../assets/weather.svg";
import cities from "../assets/cities.svg";
import map from "../assets/map.svg";
import settings from "../assets/settings.svg";

export default function Sidebar() {
    return <div className="bg-[#202B3B] w-20 rounded-3xl text-[#9197A0] h-full flex flex-col items-center gap-12 p-4">
        <img src={umbrella} alt="umbrella" />
        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
                <img src={weather} alt="umbrella" />
                <span>Weather</span>            
            </div>
            <div className="flex flex-col items-center gap-2">
                <img src={cities} alt="umbrella" />
                <span>Cities</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <img src={map} alt="umbrella" />
                <span>Map</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <img src={settings} alt="umbrella" />
                <span>Settings</span>
            </div>
        </div>
    </div>;
}