"use client";

import { useState } from "react";
import Image from "next/image";

import TaskTelegram from "@/icons/TaskTelegram";
import TaskTwitter from "@/icons/TaskTwitter";
import TaskWallet from "@/icons/TaskWallet";
import { taskBlum, taskBoost, SleepGarfield, Garfield } from "@/images";
import TaskPaws from "@/icons/TaskPaws";
import TaskInvite from "@/icons/TaskInvite";

type Task = {
  icon: string | React.FC<{ className?: string }>;
  title: string;
  reward: string;
  isComponent?: boolean;
};

const TasksTab = () => {
  const [activeTab, setActiveTab] = useState<"in-game" | "partners">("in-game");
  const tasks: Task[] = [
    {
      icon: SleepGarfield.src,
      title: "Put $GRF in your name",
      reward: "+ 3,000 GRF",
    },
    {
      icon: Garfield.src,
      title: "Tweet About GRF",
      reward: "+ 2,000 GRF",
    },
    {
      icon: taskBoost.src,
      title: "Boost Garfield Channel",
      reward: "+ 4,000 GRF",
    },
    {
      icon: TaskTelegram,
      title: "Follow Channel",
      reward: "+ 1,500 GRF",
    },
    {
      icon: TaskTwitter,
      title: "Follow Our Twitter",
      reward: "+ 3,000 GRF",
    },
    {
      icon: TaskInvite,
      title: "Invite 10 Friends",
      reward: "+ 5,000 GRF",
    },
    {
      icon: TaskWallet,
      title: "Connect Wallet",
      reward: "+ 1,500 GRF",
    },
  ];

  const partnerTasks: Task[] = [
    {
      icon: taskBlum.src,
      title: "Join Blum Channel",
      reward: "+ 1,000 GRF",
    },
  ];

  return (
    <div className={`quest-tab-con px-4 transition-all duration-300`}>
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-3xl font-bold mb-2">TASKS</h1>
        <div>
          <span className="text-xl font-semibold">GET REWARDS</span>
          <span className="text-xl text-black">FOR</span>
        </div>
        <div className="text-xl text-black">COMPLETING QUEST</div>
      </div>
      {/* TAB SWITCHER*/}
      <div className="flex gap-0 mt-6">
        <button
          onClick={() => setActiveTab("in-game")}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium 
            transition duration-300
            ${activeTab === "in-game" ? "bg-white text-black" : "bg-[#151516] text-white"}`}>
          In-game
        </button>

        <button
          onClick={() => setActiveTab("partners")}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium 
                flex items-center justify-center gap-2 transition duration-300
                ${activeTab === "partners" ? "bg-white text-black" : "bg-[#151516] text-white"}`}>
          Partners
          <div
            className="bg-[#5a5a5a] text-[#fefefe] size-4 
                    rounded-full flem items-center justify-center text-[11px]"></div>
        </button>
      </div>
      {/*TASKS LIST */}
      <div className="mt-4 mb-20 bg-[#151516] rounded-xl">
        {(activeTab === "in-game" ? tasks : partnerTasks).map((task, index) => (
          <div key={index} className="flex items-center">
            <div className="w-[72px] flex justify-center">
              {/* Fixed width container for icons */}
              <div className="w-10 h-10">
                {/* Fixed size container */}
                {typeof task.icon === "string" ? <Image src={task.icon} alt={task.title} width={40} height={40} className="w-full h-full object-contain" /> : <task.icon className="w-full h-full" />}
              </div>
            </div>

            <div
              className="flex items-center justify-between w-full py-4 pr-4 
                      ${index !== 0 && 'border-t border-[#222622]'}">
              <div>
                <div className="text-[17px] text-white">{task.title}</div>
                <div className="text-white text-[14px]">{task.reward}</div>
              </div>

              <button
                className="h-8 bg-white text-black px-4 rounded-full text-sm 
                           font-medium flex items-center">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksTab;
