import React from "react";
import {Zap} from 'lucide-react'

const HeroAboutHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[2px] select-none text-yellow-600">
        <Zap className="h-[30px]"></Zap>
        <h2 className="text-sm font-bold name">KETCHAO</h2>
      </div>
    </div>
  );
};

export default HeroAboutHeader;
