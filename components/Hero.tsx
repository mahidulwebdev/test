"use client";
import { useThemeStore } from "@/lib/Store";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";


const Hero = () => {
  const { theme } = useThemeStore();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Glow Decors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute top-20 right-[-10%] w-125 h-125 rounded-full blur-[120px] opacity-40 ${theme ? "bg-blue-600/20" : "bg-blue-500/10"}`}
        ></div>
        <div
          className={`absolute bottom-[-10%] left-[-10%] w-100 h-100 rounded-full blur-[100px] opacity-40 ${theme ? "bg-cyan-500/10" : "bg-blue-400/10"}`}
        ></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12 relative z-10 py-12 max-w-360">
        {/* Hero Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-6"
        >
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold ${theme ? "bg-[#2563EB]/10 border-[#2563EB]/30 text-blue-400" : "bg-blue-50 border-blue-200 text-[#004AC6]"}`}
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>The Premier Bengali & English AI ChatBot</span>
          </div>

          <h1
            className={`text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight ${theme ? "text-white" : "text-[#0B1C30]"}`}
          >
            সহায়িকার সাথে আপনার <br />
            <span className="bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              AI যাত্রা
            </span>{" "}
            শুরু করুন
          </h1>

          <p
            className={`text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed ${theme ? "text-[#CBD5E1]" : "text-[#434655]"}`}
          >
            বাংলা ও ইংরেজিতে প্রশ্ন করুন, তথ্য জানুন, পড়াশোনা করুন,
            এবং আরও অনেক কিছু করুন। আপনার প্রতিদিনের কাজকে সহজ এবং সুন্দর করতে
            সহায়িকা সবসময় প্রস্তুত।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 cursor-pointer">
            <button
              //   onClick={() => onNavigate("chat")}
              className={`px-8 py-4 rounded-2xl font-bold text-base shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 ${theme ? "bg-[#2563EB] text-white hover:bg-blue-600 shadow-blue-500/20" : "bg-[#004AC6] text-white hover:bg-blue-700 shadow-blue-700/20"}`}
            >
              ফ্রি চ্যাট শুরু করুন
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trusted Users Avatar and Count */}
          {/* <div className="flex items-center gap-4 justify-center md:justify-start pt-6 border-t border-slate-200/10">
            <div className="flex -space-x-3">
              <img
                className="w-9 h-9 rounded-full border-2 border-slate-300 object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="user"
              />
              <img
                className="w-9 h-9 rounded-full border-2 border-slate-300 object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="user"
              />
              <img
                className="w-9 h-9 rounded-full border-2 border-slate-300 object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
                alt="user"
              />
            </div>
            <div className="text-left text-xs">
              <p className="font-bold text-sm">১০,০০০+ ব্যবহারকারী</p>
              <p
                className={`opacity-80 ${theme ? "text-slate-400" : "text-[#434655]"}`}
              >
                পেশাদার এবং শিক্ষার্থীদের পছন্দের AI সঙ্গী
              </p>
            </div>
          </div> */}
        </motion.div>

        {/* Hero Right Device Layout (Glowing Orb and Simulated Chats) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div
            className={`p-4 rounded-[2.5rem] border shadow-2xl overflow-hidden backdrop-blur-md ${theme ? "bg-slate-900/70 border-slate-800" : "bg-white/80 border-slate-200"}`}
          >
            <div
              className={`relative aspect-square min-w-full rounded-3xl overflow-hidden flex flex-col justify-between p-6 ${theme ? "bg-slate-950/80" : "bg-slate-50/90"}`}
            >
              {/* 3D Glass Orb Visual (Representing Sahayika AI Neural Hub) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 ">
                <div
                  className={`w-52 h-52 rounded-full absolute mix-blend-screen filter blur-xl animate-pulse ${theme ? "bg-blue-600/30" : "bg-blue-500/15"}`}
                ></div>
                <div
                  className={`w-40 h-40 rounded-full border shadow-2xl relative flex items-center justify-center overflow-hidden border-blue-500/20 ${theme ? "bg-linear-to-br from-blue-900/30 to-[#0F172A]" : "bg-linear-to-br from-blue-100 to-white"}`}
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 animate-ping absolute"></div>
                  <Sparkles
                    className={`w-12 h-12 ${theme ? "text-blue-400" : "text-blue-600"}`}
                  />
                </div>
              </div>

              {/* Simulated Chat Bubble overlays */}
              <div className="relative z-10 w-full flex flex-col gap-4 mt-auto 
              ">
                <div
                  className={`p-3.5 rounded-2xl max-w-[80%] self-start border animate-fade-in-up shadow-sm ${theme ? "bg-slate-900 border-slate-800 text-[#F1F5F9]" : "bg-white border-slate-200 text-[#0B1C30]"} `}
                >
                  <p className="text-[10px] font-bold text-blue-500 mb-0.5">
                    User
                  </p>
                  <p className="text-xs leading-relaxed">
                    সহায়িকা, কোয়ান্টাম কম্পিউটিং খুব সহজে ১ বাক্যে বুঝিয়ে দাও
                    তো?
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl max-w-[85%] self-end bg-[#2563EB] text-white animate-fade-in-up shadow-md">
                  <p className="text-[10px] font-bold text-blue-200 mb-0.5">
                    সহায়িকা
                  </p>
                  <p className="text-xs leading-relaxed font-medium">
                    কোয়ান্টাম কম্পিউটিং হলো এমন প্রযুক্তি যা সাধারণ কম্পিউটারের
                    মতো শুধু ০ বা ১ নয়, বরং একাধারে ০ এবং ১ উভয় শক্তি ব্যবহার
                    করে অতি দ্রুত জটিল সব গাণিতিক সমস্যার সমাধান করতে পারে।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
