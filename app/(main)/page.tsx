"use client";
import { useState , useEffect } from "react";
import { CarouselDemo } from "@/components/Coursol";
import { Alata } from "next/font/google";
import { ImageGallery } from "react-image-grid-gallery";
import axios from "axios";
const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/servers");
        setImages(response.data.data);
        console.log(response.data.data);
        
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="mt-[100px]">
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className={`text-4xl font-semibold ${alata.className}`}>
            Some <span className={`text-rose-500 font-bold`}>Memories</span>
          </h1>
          <div className=" mx-auto flex justify-center items-center">
            <CarouselDemo />
          </div>
          <h1 className={`text-4xl font-semibold ${alata.className}`}>
            Wall <span className={`text-rose-500 font-bold`}>Gallery</span>
          </h1>{images ?<ImageGallery
            imagesInfoArray={images}
            columnWidth={330}
            gapSize={24}
          />: <p>Loading...</p> }
          
        </div>
      </div>
    </main>
  );
}
