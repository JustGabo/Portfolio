import React from "react";
import { Zap } from "lucide-react";

export function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[2px] select-none text-yellow-300">
        <Zap className="h-[30px]"></Zap>
        <h2 className="text-sm font-bold ">KETCHIAO</h2>
      </div>
    </div>
  );
}

