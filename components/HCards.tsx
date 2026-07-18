import { useThemeStore } from "@/lib/Store";
import {
  Award,
  FileText,
  GraduationCap,
  History,
  Image,
  Languages,
  Mic,
  Terminal,
} from "lucide-react";
import { useRouter } from "next/navigation";

const HCards = () => {
  const router = useRouter();
  const { theme } = useThemeStore();
  return (
    <section
      className={`py-20 border-t ${theme ? "bg-slate-950/50 border-slate-900" : "bg-[#EFF4FF]/60 border-slate-200/50"}`}
    >
      <div className="container mx-auto px-6 max-w-360">
        <div className="text-center mb-16 space-y-3">
          <h2
            className={`text-3xl font-bold tracking-tight ${theme ? "text-white" : "text-[#0B1C30]"}`}
          >
            আমাদের শক্তিশালী ফিচারসমূহ
          </h2>
          <p
            className={`max-w-2xl mx-auto text-sm md:text-base ${theme ? "text-slate-400" : "text-[#434655]"}`}
          >
            সহায়িকা আপনাকে সাহায্য করতে পারে বহুমুখী কর্মকাণ্ডে, যা আপনার
            প্রোডাক্টিভিটি ও সৃজনশীলতা বৃদ্ধি করবে বহুগুণ।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AI Chat */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${theme ? "bg-slate-900/50 border-slate-800 hover:border-blue-500/50" : "bg-white border-slate-200/80 hover:border-blue-500/30 hover:shadow-lg"}`}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 font-bold">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">AI Chat (বাংলা-ইংরেজি)</h3>
            <p
              className={`text-xs leading-relaxed ${theme ? "text-slate-400" : "text-[#434655]"}`}
            >
              স্বাভাবিক ভাষায় কথা বলুন, যেমনটা আপনি একজন মানুষের সাথে করেন।
              বাংলা ও ইংরেজিতে সমান পারদর্শী।
            </p>
          </div>

          {/* Coding Assist */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${theme ? "bg-slate-900/50 border-slate-800 hover:border-blue-500/50" : "bg-white border-slate-200/80 hover:border-blue-500/30 hover:shadow-lg"}`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 font-bold">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Coding Helper</h3>
            <p
              className={`text-xs leading-relaxed ${theme ? "text-slate-400" : "text-[#434655]"}`}
            >
              জটিল কোড লিখুন, ডিবাগ করুন এবং নতুন প্রোগ্রামিং ল্যাঙ্গুয়েজ শিখুন
              সহায়িকার সার্বক্ষণিক নির্দেশনায়।
            </p>
          </div>

          {/* Study Partner */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${theme ? "bg-slate-900/50 border-slate-800 hover:border-blue-500/50" : "bg-white border-slate-200/80 hover:border-blue-500/30 hover:shadow-lg"}`}
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-4 font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Study Partner</h3>
            <p
              className={`text-xs leading-relaxed ${theme ? "text-slate-400" : "text-[#434655]"}`}
            >
              যেকোনো কঠিন পড়াশোনার বিষয় সহজে বুঝে নিন। নোটস তৈরি এবং কুইজ
              প্র্যাকটিস করার আদর্শ বন্ধু।
            </p>
          </div>

          {/* Visual Intelligence */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${theme ? "bg-slate-900/50 border-slate-800 hover:border-blue-500/50" : "bg-white border-slate-200/80 hover:border-blue-500/30 hover:shadow-lg"}`}
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4 font-bold">
              <Image className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Visual Intelligence</h3>
            <p
              className={`text-xs leading-relaxed ${theme ? "text-slate-400" : "text-[#434655]"}`}
            >
              ছবি আপলোড করে বিস্তারিত তথ্য জানুন, কিংবা ছবির ভেতরের লেখা
              ট্রান্সক্রাইব ও এডিট করুন সহজেই।
            </p>
          </div>

          {/* Document Analysis */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${theme ? "bg-slate-900/50 border-slate-800 hover:border-blue-500/50" : "bg-white border-slate-200/80 hover:border-blue-500/30 hover:shadow-lg"}`}
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4 font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Document Analysis</h3>
            <p
              className={`text-xs leading-relaxed ${theme ? "text-slate-400" : "text-[#434655]"}`}
            >
              বিশাল ডকুমেন্ট বা পিডিফ ফাইল আপলোড করে এক ক্লিকে সারসংক্ষেপ বের
              করুন ও উত্তর খুঁজুন।
            </p>
          </div>

          {/* Voice Interaction */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${theme ? "bg-slate-900/50 border-slate-800 hover:border-blue-500/50" : "bg-white border-slate-200/80 hover:border-blue-500/30 hover:shadow-lg"}`}
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center mb-4 font-bold">
              <Mic className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Voice Companion</h3>
            <p
              className={`text-xs leading-relaxed ${theme ? "text-slate-400" : "text-[#434655]"}`}
            >
              টাইপ করার ঝামেলা এড়িয়ে সরাসরি ভয়েস কমান্ড দিন এবং সহায়িকার স্পষ্ট
              কণ্ঠস্বরে জবাব শুনুন।
            </p>
          </div>

          {/* Content Generator */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${theme ? "bg-slate-900/50 border-slate-800 hover:border-blue-500/50" : "bg-white border-slate-200/80 hover:border-blue-500/30 hover:shadow-lg"}`}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Creative Creator</h3>
            <p
              className={`text-xs leading-relaxed ${theme ? "text-slate-400" : "text-[#434655]"}`}
            >
              আর্টিকেল, প্রাতিষ্ঠানিক বা প্রফেশনাল ইমেইল, সোশ্যাল মিডিয়া পোস্ট
              কিংবা আকর্ষণীয় গল্প লিখুন।
            </p>
          </div>

          {/* History Organizer */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${theme ? "bg-slate-900/50 border-slate-800 hover:border-blue-500/50" : "bg-white border-slate-200/80 hover:border-blue-500/30 hover:shadow-lg"}`}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 font-bold">
              <History className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Smart History Organizer</h3>
            <p
              className={`text-xs leading-relaxed ${theme ? "text-slate-400" : "text-[#434655]"}`}
            >
              আপনার পূর্ববর্তী চ্যাট ও নোট ফোল্ডার অনুযায়ী গুছিয়ে রাখুন যাতে
              যেকোনো সময় দ্রুত খুঁজে পান।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HCards;
