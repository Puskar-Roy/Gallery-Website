import { CarouselDemo } from "@/components/Coursol";
import { Alata } from "next/font/google";

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="mt-[100px]">
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className={`text-4xl font-semibold ${alata.className}`}>
            My <span className={`text-rose-500`}>Memories</span>
          </h1>
          <div className=" mx-auto flex justify-center items-center">
            <CarouselDemo />
          </div>
        </div>
      </div>
    </main>
  );
}
