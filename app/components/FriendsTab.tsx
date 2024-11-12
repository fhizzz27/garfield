"use client";

import Image from "next/image";
import SleepGarfield from "@/images/Garfield_2.png";

const FriendsTab = () => {
  return (
    <div className={`friends-tab-con px-4 pb-24 transition-all duration-300`}>
      {/* Header Text */}
      <div className="pt-8 space-y-1">
        <h1 className="text-3xl font-bold">INVITE FRIENDS</h1>
        <div className="text-xl">
          <span className="font-semibold">SHARE</span>
          <span className="ml-2 text-black">YOUR INVITATION</span>
        </div>
        <div className="text-xl">
          <span className="text-black">LINK &</span>
          <span className="ml-2 font-semibold">GET 10%</span>
          <span className="ml-2 text-black">OF</span>
        </div>
        <div className="text-black text-xl">FRIEND'S POINTS</div>
      </div>
      {/*Empy State */}
      <div className="mt-8 mb-2">
        <div
          className="bg-transform border-4 border-black w-full rounded-2xl p-8 flex flex-col
        items-center">
          <Image src={SleepGarfield} alt="Garfield" width={300} height={350} className="mb-4" />
          <p className="text-xl text-black font-semibold text-center">
            There is nothing else. <br />
            Invite to get more Rewards
          </p>
        </div>
      </div>

      {/*Fixed Bottom Button Invite */}

      <div className="fixed-bottom-[80px] left-0 right-0 py-4 flex justify-center">
        <div className="w-full max-w-md px-4">
          <button
            className="w-full bg-[#4c9ce2] text-black py-4 rounded-xl
            text-lg font-medium">
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendsTab;
