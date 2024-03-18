"use client"
import{Card, CardContent} from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Badge, Import } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import {CalendarIcon} from "lucide-react";

//import Post from "@/interfaces/post";
import Autoplay from "embla-carousel-autoplay";
import Post from "@/interfaces/post";
 
        type Props = {
            posts: Post[];
        };

export default function heroCarousel({posts}: Props){
    return <section>
        <Carousel
        plugins={[
            Autoplay({
            delay: 2000,
            StopOnInteraction: true,
            })
        ]}
      >
        
        <CarouselContent className="rounded-lg">
                {posts.map((post) =>(
                    <CarouselItem className="hover:shadow-xl hover:-translate-y-1 transition ease-in-out duration-300" key={post.fields.title} >
                          <Link href={`/entradas/${post.fields.slug}`}>
                          <Card className="relative w-full h-[36rem] rounderd-lg dark:border-slate-800"/>  
                            {post.fields.title}
                          </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    </section>
}