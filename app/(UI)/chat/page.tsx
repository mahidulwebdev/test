"use client";
import { auth, useClerk, useUser } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page =  () => {
    const { isLoaded, isSignedIn, } = useUser();
     const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return null; // or a fallback while redirecting
  }

  return (
    <section className=" bg-slate-900 w-full h-screen text-white flex flex-col justify-center items-center">
      <h1 className=" text-2xl font-semibold ">Chat Area Here </h1>

      <button
        onClick={() => signOut({ redirectUrl: "/" })}
        className=" mt-10 bg-blue-400 rounded-full p-2 cursor-pointer transition-all hover:bg-blue-500 hover:shadow hover:shadow-blue-100 "
      >
        <LogOut className="  text-black w-10 h-10" />
      </button>
    </section>
  );
};

export default page;
