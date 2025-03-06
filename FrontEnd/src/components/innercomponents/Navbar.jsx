import React from "react";
import images from "./asserts"
import { IoIosSettings } from "react-icons/io";

function Navbar() {
    return (
        <div className="nav flex w-full h-28 justify-between pt-6 px-8 backdrop-blur-sm fixed ">
            <div className="sub-section flex gap-24">
                <div className=" logo w-32 ">
                    <img src={images.logo} className="relative bottom-10" alt="" />
                </div>
                <div className="twoInterface pt-2">
                    <span className="text-black font-bold tracking-wide text-2xl">Second Face</span>
                </div>
            </div>
            <div className="Menu">
                <div className="img-section">
                    <div className=" logo">
                    <IoIosSettings size={45} className="text-gray-400"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar