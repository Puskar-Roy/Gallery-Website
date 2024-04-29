"use client";
import React from "react";
import Dialogbox from "@/components/Dialogbox";
import { Alata } from "next/font/google";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const page = () => {
  const router = useRouter();
  const session = useSession();
  if (session.status !== "authenticated") {
    return router.push("/");
  }
  return (
    <div className="mt-[200px]">
      <div className="w-[85%] mx-auto flex justify-center items-center flex-col gap-10">
        <h1 className={`text-4xl font-semibold ${alata.className}`}>
          Upload Your{" "}
          <span className={`text-rose-500 font-bold`}>Memories</span>
        </h1>
        <Dialogbox />
      </div>
    </div>
  );
};

export default page;
