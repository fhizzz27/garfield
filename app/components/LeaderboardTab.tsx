"use client";
import "./LeaderboardTab.css";
import PawsLogo from "@/icons/PawsLogo";
import { trophy } from "@/images";
import Image from "next/image";
import Garfield from "@/images/GarfieldBOT.png";

type LeaderboardItem = {
  wallet: string;
  balance: string;
  place: string | number;
  medal?: "🥇" | "🥈" | "🥉";
};

const LeaderboardTab = () => {
  const leaderboardData: LeaderboardItem[] = [
    { wallet: "Pishnahad_Sup", balance: "11,232", place: "#1", medal: "🥇" },
    { wallet: "imGet", balance: "10,123", place: "#2", medal: "🥈" },
    { wallet: "Esalat", balance: "10,111", place: "#3", medal: "🥉" },
    { wallet: "mehransaydi", balance: "10,100", place: "#4" },
    { wallet: "abbas", balance: "9,934", place: "#5" },
    { wallet: "CenterProd", balance: "9,512", place: "#6" },
    { wallet: "tuxeqot", balance: "9,412", place: "#7" },
    { wallet: "ladesov", balance: "8,766", place: "#8" },
  ];
  return (
    <div className="leaderboard-tab-con transition-all duration-300">
      <div className="px-4">
        {/* Header */}
        <div className="flex flex-col items-center mt-4">
          <Image src={trophy} alt="Trophy" width={80} height={80} className="mb-2" />
          <h1 className="text-2xl font-bold mb-2">Leaderboard</h1>
          <div className="w-full mt-2 px-6 py-1 flex justify-between rounded-lg text-sm font-medium text-[#fefefe] bg-[#151516]">
            <span>Total</span>
            <span> NO USER YET</span>
          </div>
        </div>

        {/* USER MY ACCOUNT */}
        <div className="bg-black rounded-2xl p-6 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 p-1.5 bg-[#ffa500] rounded-lg">
                <Image src={Garfield} alt="Garfield" className="w-full h-full" />
              </div>
              <div className="text-white font-medium">
                <div className="text-base">Apis_27</div>
                <div className="text-xs">4,100 GRF</div>
              </div>
            </div>
            <div className="text-[#fff]">#1000</div>
          </div>
        </div>

        {/*LEADERBOARD LIST */}
        <div className="mt-4 space-y-0 rounded-t-2xl">
          {leaderboardData.map((item, index) => (
            <div key={index} className={`p-5 flex items-center justify-between border-b-[1px] border-[#222622] ${index === 0 ? "bg-[#2d2b1b] rounded-t-2xl" : index === 1 ? "bg-[#272728]" : index === 2 ? "bg-[#2d241b]" : "bg-[#151515]"}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 p-1.5 bg-[#ffa500] rounded-lg">
                  <Image src={Garfield} alt="Garfield" className="w-full h-full text-white" />
                </div>
              </div>
              <div className="wrapper">
                <div className="text-base font-medium text-white">{item.wallet} </div>
                <div className="text-sm font-medium text-[#fff]">{item.balance} GRF</div>
              </div>
              <div className={`text-base font-medium ${typeof item.place === "string" && item.place.startsWith("#") ? "text-white" : ""}`}>{item.place}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LeaderboardTab;
