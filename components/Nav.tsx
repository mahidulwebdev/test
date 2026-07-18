"use client";
import Container from "@/lib/Container";
import { useThemeStore } from "@/lib/Store";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const { theme, changeTheme } = useThemeStore();

  return (
    <header
      className={` sticky top-0 w-full z-50 transition-all duration-200 border-b backdrop-blur-xl ${theme ? "bg-[#0F172A]/80 border-[#334155]/30" : "bg-[#F8F9FF]/80 border-[#C3C6D7]/30"} shadow-sm`}
    >
      <Container>
        <div className="flex justify-between items-center h-16 px-6 ">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={"/brand.png"} width={40} height={40} alt="Brand Logo" />
            <span
              className={`text-xl font-bold ${theme ? "text-[#b4c5ff]" : "text-[#004AC6]"}`}
            >
              সহায়িকা
            </span>
          </div>

          {/* Nav Links */}

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode toggle */}
            <button
              onClick={changeTheme}
              className={` cursor-pointer p-2 rounded-xl border transition-colors ${theme ? "bg-slate-800 text-yellow-400 border-slate-700 hover:bg-slate-700" : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"}`}
              title={theme ? "লাইট মোডে যান" : "ডার্ক মোডে যান"}
            >
              {theme ? "☀️" : "🌙"}
            </button>
            <Show when="signed-out">
              <SignInButton>
                <button
                  onClick={() => router.push("/auth/sign_up")}
                  className={` cursor-pointer text-sm font-semibold px-4 py-2 rounded-xl transition-all ${theme ? "text-slate-300 hover:text-white" : "text-[#004AC6] hover:bg-blue-50"}`}
                >
                  লগইন
                </button>
              </SignInButton>

              <SignUpButton>
                <button
                  // onClick={() => router.push("/auth/sign_in")}
                  className={` cursor-pointer text-sm font-semibold px-5 py-2 rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-1.5 ${theme ? "bg-[#2563EB] text-white hover:bg-blue-600 shadow-blue-900/20" : "bg-[#004AC6] text-white hover:bg-blue-800 shadow-blue-200/50"}`}
                >
                  চ্যাট করুন
                  <ArrowRight className="w-4 h-4" />
                </button>
              </SignUpButton>
            </Show>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Nav;
