import React from "react";
import Sidebar from "../components/Sidebar";
import sun from "../assets/sun.svg"
import cloudy from "../assets/cloudy.svg"
import suncloudy from "../assets/sun-cloudy.svg"
import sunny from "../assets/sunny.svg"
import rainy from "../assets/rainy.svg"
import conditionsFeel from "../assets/conditions_feel.svg"
import conditionsWind from "../assets/conditions_wind.svg"
import conditionsRain from "../assets/conditions_rain.svg"
import conditionsUV from "../assets/conditions_uv.svg"

export default function Home() {
    return (
        <div className="flex gap-6 h-full w-full text-white">
            <Sidebar />
            <div className="flex-auto flex flex-col justify-between">
                <input type="text" className="bg-[#202B3B] w-full rounded-xl text-[#9197A0] h-12 p-4" placeholder="Search for a city" />
                <div className="flex justify-between p-8 h-64">
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="text-5xl text-[#dde0e4] font-semibold">Madrid</p>
                            <p className="text-[#9399a2]">Chance of rain: 0%</p>
                        </div>
                        <div className="text-6xl text-[#f0f1f1] font-semibold">
                            31°C
                        </div>
                    </div>
                    <img src={sun} alt="sun icon" />
                </div>
                <div className="bg-[#202B3B] rounded-3xl p-8">
                    <h2 className="text-[#9399a2] font-semibold text-sm mb-4">TODAY'S FORECAST</h2>
                    <div className="bg-[#202B3B] flex gap-4 justify-between px-6">
                        <div className="flex flex-col gap-4 justify-between items-center">
                            <span className="text-[#9399a2] font-semibold">6:00 AM</span>
                            <img src={cloudy} alt="sun icon" />
                            <span>25°C</span> 
                        </div>
                        <div className="w-[2px] bg-[#35455e] self-stretch"></div>
                        <div className="flex flex-col gap-4 justify-between items-center">
                            <span className="text-[#9399a2] font-semibold">9:00 AM</span>
                            <img src={suncloudy} alt="sun icon" />
                            <span>28°C</span> 
                        </div>
                        <div className="w-[2px] bg-[#35455e] self-stretch"></div>
                        <div className="flex flex-col gap-4 justify-between items-center">
                            <span className="text-[#9399a2] font-semibold">12:00 PM</span>
                            <img src={sunny} alt="sun icon" />
                            <span>33°C</span> 
                        </div>
                        <div className="w-[2px] bg-[#35455e] self-stretch"></div>
                        <div className="flex flex-col gap-4 justify-between items-center">
                            <span className="text-[#9399a2] font-semibold">3:00 PM</span>
                            <img src={sunny} alt="sun icon" />
                            <span>34°C</span> 
                        </div>
                        <div className="w-[2px] bg-[#35455e] self-stretch"></div>
                        <div className="flex flex-col gap-4 justify-between items-center">
                            <span className="text-[#9399a2] font-semibold">6:00 PM</span>
                            <img src={sunny} alt="sun icon" />
                            <span>32°C</span> 
                        </div>
                        <div className="w-[2px] bg-[#35455e] self-stretch"></div>
                        <div className="flex flex-col gap-4 justify-between items-center">
                            <span className="text-[#9399a2] font-semibold">9:00 PM</span>
                            <img src={suncloudy} alt="sun icon" />
                            <span>30°C</span> 
                        </div>
                    </div>
                </div>
                <div className="bg-[#202B3B] rounded-3xl p-8">
                    <h2 className="text-[#9399a2] font-semibold text-sm mb-4">AIR CONDITIONS</h2>
                    <div className="grid grid-cols-2 grid-rows-2 gap-8">
                        <div className="px-8 relative">
                            <img src={conditionsFeel} alt="sun icon" className="absolute left-0 top-0" />
                            <h3 className="text-[#9399a2] text-xl">Real Feel</h3>
                            <span className="text-[#c4cad3] font-semibold text-3xl">30°C</span>
                        </div>
                        <div className="px-8 relative">
                            <img src={conditionsWind} alt="sun icon" className="absolute left-0 top-0" />
                            <h3 className="text-[#9399a2] text-xl">Wind</h3>
                            <span className="text-[#c4cad3] font-semibold text-3xl">0.2 km/h</span>
                        </div>
                        <div className="px-8 relative">
                            <img src={conditionsRain} alt="sun icon" className="absolute left-0 top-0" />
                            <h3 className="text-[#9399a2] text-xl">Chance of rain</h3>
                            <span className="text-[#c4cad3] font-semibold text-3xl">0%</span>
                        </div>
                        <div className="px-8 relative">
                            <img src={conditionsUV} alt="sun icon" className="absolute left-0 top-0" />
                            <h3 className="text-[#9399a2] text-xl">UV Index</h3>
                            <span className="text-[#c4cad3] font-semibold text-3xl">3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[#9399a2] bg-[#202b3b] rounded-3xl p-8 flex flex-col justify-between w-120">
                <h3 className="text-sm">7 DAY FORECAST</h3>
                <div className="grid grid-cols-[140px_1fr_60px] items-center">
                    <span>Today</span>
                    <div className="flex gap-2 items-center">
                        <img src={sunny} alt="sun icon" />
                        <span className="text-[#c4cad3] font-semibold">Sunny</span>
                    </div>
                    <span><span className="text-[#c4cad3] font-semibold">32</span> /24</span>
                </div>
                <div className="bg-[#35455e] w-full h-[2px]"></div>
                <div className="grid grid-cols-[140px_1fr_60px] items-center">
                    <span>Tuesday</span>
                    <div className="flex gap-2 items-center">
                        <img src={sunny} alt="sun icon" />
                        <span className="text-[#c4cad3] font-semibold">Sunny</span>
                    </div>
                    <span><span className="text-[#c4cad3] font-semibold">32</span> /24</span>
                </div>
                <div className="bg-[#35455e] w-full h-[2px]"></div>
                <div className="grid grid-cols-[140px_1fr_60px] items-center">
                    <span>Wednesday</span>
                    <div className="flex gap-2 items-center">
                        <img src={sunny} alt="sun icon" />
                        <span className="text-[#c4cad3] font-semibold">Sunny</span>
                    </div>
                    <span><span className="text-[#c4cad3] font-semibold">32</span> /24</span>
                </div>
                <div className="bg-[#35455e] w-full h-[2px]"></div>
                <div className="grid grid-cols-[140px_1fr_60px] items-center">
                    <span>Thursday</span>
                    <div className="flex gap-2 items-center">
                        <img src={sunny} alt="cloud icon" />
                        <span className="text-[#c4cad3] font-semibold">Sunny</span>
                    </div>
                    <span><span className="text-[#c4cad3] font-semibold">32</span> /24</span>
                </div>
                <div className="bg-[#35455e] w-full h-[2px]"></div>
                <div className="grid grid-cols-[140px_1fr_60px] items-center">
                    <span>Friday</span>
                    <div className="flex gap-2 items-center">
                        <img src={sunny} alt="cloud icon" />
                        <span className="text-[#c4cad3] font-semibold">Sunny</span>
                    </div>
                    <span><span className="text-[#c4cad3] font-semibold">32</span> /24</span>
                </div>
                <div className="bg-[#35455e] w-full h-[2px]"></div>
                <div className="grid grid-cols-[140px_1fr_60px] items-center">
                    <span>Saturday</span>
                    <div className="flex gap-2 items-center">
                        <img src={sunny} alt="rain icon" />
                        <span className="text-[#c4cad3] font-semibold">Sunny</span>
                    </div>
                    <span><span className="text-[#c4cad3] font-semibold">32</span> /24</span>
                </div>
                <div className="bg-[#35455e] w-full h-[2px]"></div>
                <div className="grid grid-cols-[140px_1fr_60px] items-center">
                    <span>Sunday</span>
                    <div className="flex gap-2 items-center">
                        <img src={sunny} alt="sun icon" />
                        <span className="text-[#c4cad3] font-semibold">Sunny</span>
                    </div>
                    <span><span className="text-[#c4cad3] font-semibold">32</span> /24</span>
                </div>
            </div>
        </div>
    )
}