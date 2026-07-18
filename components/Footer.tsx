"use client";
import { useThemeStore } from "@/lib/Store";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const { theme } = useThemeStore();
  return (
    <footer
      className={`py-12 border-t ${theme ? "bg-slate-950 border-slate-900 text-slate-400" : "bg-white border-slate-200 text-[#434655]"}`}
    >
      <div className="max-w-360 mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center  text-white`}
          >
              <Image src={"/brand.png"} width={40} height={40} alt="Brand Logo" />
          </div>
          <span
            className={`font-bold ${theme ? "text-white" : "text-[#0B1C30]"}`}
          >
            সহায়িকা
          </span>
        </div>
        <p className="text-xs">© ২০২৬ সহায়িকা AI. সর্বস্বত্ব সংরক্ষিত।</p>
        <div className="flex gap-6 text-xs">
          <button className="hover:text-blue-500">প্রাইভেসি পলিসি</button>
          <button className="hover:text-blue-500">শর্তাবলী</button>
          <button className="hover:text-blue-500">যোগাযোগ</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
