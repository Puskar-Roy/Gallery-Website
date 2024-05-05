import * as React from "react";
import logo from '@/public/firstpic.jpg'
import pic1 from '@/public/mypic.jpg'
import pic2 from '@/public/newpic.jpg'
import pic3 from '@/public/oldpic.jpg'
import pic4 from '@/public/oldpic2.jpg'
import pic5 from '@/public/oldpic3.jpg'
import pic6 from '@/public/ppic.jpg'
import pic8 from '@/public/hero1.jpg'
import pic9 from '@/public/hero2.jpg'
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
                <Image src={pic3} height={600} width={600} alt="Logo" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basic-1/3 sm:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={pic4} height={600} width={600} alt="Logo" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basic-1/3 sm:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={pic3} height={600} width={600} alt="Logo" />
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
                <Image src={pic2} height={600} width={600} alt="Logo" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basic-1/3 sm:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={pic5} height={600} width={600} alt="Logo" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basic-1/3 sm:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={pic1} height={600} width={600} alt="Logo" />
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
