"use client";
import { useThemeStore } from "@/lib/Store";
import { ArrowRight, Layers, SendHorizontal } from "lucide-react";
import React from "react";

const NewsLetter = () => {
  const { theme } = useThemeStore();
  return (
    <section className="py-20 px-6">
      <div className="max-w-250 mx-auto">
        <div
          className={`rounded-[2.5rem] p-12 text-center relative overflow-hidden shadow-xl border ${theme ? "bg-linear-to-br from-blue-950/40 via-slate-900 to-slate-950 border-slate-800" : "bg-linear-to-br from-blue-50 via-white to-blue-50/50 border-blue-100"}`}
        >
          <div className="relative z-10 space-y-6">
            <h2
              className={`text-3xl md:text-4xl font-extrabold tracking-tight ${theme ? "text-white" : "text-[#0B1C30]"}`}
            >
              ভবিষ্যতের বুদ্ধিমত্তার সাথে পরিচিত হোন
            </h2>

            <p
              className={`text-sm md:text-base max-w-2xl mx-auto leading-relaxed ${theme ? "text-slate-400" : "text-[#434655]"}`}
            >
              আমাদের নিউজলেটারে সাবস্ক্রাইব করুন এবং সহায়িকা'র সর্বশেষ আপডেট
              সবার আগে জানুন।
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <input
                type="email"
                name="newsLetter"
                className={` w-1/3 pl-2 font-medium rounded-xl border  ${theme ? " bg-blue-200 text-black" : " text-black"}`}
                placeholder=" আপনার ইমেইল ঠিকানা"
              />
              <button
                //   onClick={() => onNavigate("chat")}
                className={` cursor-pointer px-8 py-4 rounded-xl font-bold hover:scale-105  text-sm border transition-all ${theme ? "bg-[#2563EB] text-white hover:bg-blue-600 shadow-blue-900/20" : "bg-[#004AC6] text-white hover:bg-blue-800 shadow-blue-200/50"}`}
              >
                <span>সাবস্ক্রাইব করুন </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
