import * as React from "react";
import logo from '@/public/profilepic.jpeg'
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-[70rem]">
      <CarouselContent>
        <CarouselItem className="basic-1/3 sm:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={logo} height={600} width={600} alt="Logo" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basic-1/3 sm:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={logo} height={600} width={600} alt="Logo" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basic-1/3 sm:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={logo} height={600} width={600} alt="Logo" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basic-1/3 sm:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={logo} height={600} width={600} alt="Logo" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basic-1/3 sm:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={logo} height={600} width={600} alt="Logo" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
