"use client";

import Image from "next/image";
import Wallet from "@/icons/Wallet";
import sparkles from "@/images/sparkles.webp";
import ArrowRight from "@/icons/ArrowRight";
import Community from "@/icons/Community";
import Star from "@/icons/Star";
import Garfield from "@/images/GarfieldBOT.png";
const HomeTab = () => {
  return (
    <div className={`home-tab-con transition-all duration-300`}>
      <button className="w-full flex justify-center mt-8">
        <div className="bg-[#007aff] text-white px-3 py-0.5 rounded-full flex items-center gap-2">
          <Wallet className="w-5 h-5" />
          <span>Connect Wallet</span>
        </div>
      </button>

      {/* Balance */}

      <div className="flex flex-col items-center mt-8">
        <Image src={Garfield} alt="Garfield" width={250} height={250} className="mb-4" />

        <div className="flex items-center gap-1 text-center">
          <div className="text-6xl font-bold mb-1">4,100</div>
          <div className="text-black text-2xl">GRF</div>
        </div>
        <div className="flex items-center gap-1 text-[#222] rounded-full px-4 py-1.5 mt-2 cursor-pointer">
          <span>Newbie</span>
          <Image src={sparkles} alt="sparkles" width={18} height={18} />
          <span>RANK</span>
          <ArrowRight className="w-6 h-6 ml-5 text-black" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 px-4 mt-8 mb-8">
        <button className="shine-effect w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg px-4 py-2 flex-items-center justify-between">
          <div className="flex items-center gap-3 font-medium">
            <Community className="w-8 h-8" />
            <span>Join our Community</span>
            <ArrowRight className="w-6 h-6 text-black" />
          </div>
        </button>

        <button className=" w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg px-4 py-2 flex-items-center justify-between">
          <div className="flex items-center gap-3 font-medium">
            <Star className="w-8 h-8" />
            <span>Check Your Rewards</span>
            <ArrowRight className="w-6 h-6 text-black justify-between" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeTab;
