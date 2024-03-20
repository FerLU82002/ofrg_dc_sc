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
                          {/* <Card className="relative w-full h-[36rem] rounderd-lg dark:border-slate-800"/>   */}
                          <Card className="relative w-full h-[36rem] rounderd-lg dark:border-slate-800">
                               <div className={`absolute w-full h-full bg-cover bg-center filter brightness-50 rounded-lg`}
                               style={{ backgroundImage: `url(https:${post.fields.image.fields.file.url})`,                              
                               }}>                                                            
                                {/* <h2 className="text-2x1 font-bold ">
                                <Link href={`/blog/${post.fields.slug}`}>{post.fields.title}</Link>
                                </h2>*/}
                                
                             </div>
                             
                             <CardContent className="realative z-10 flex flex-col justify-center items-start min-h-screen gap-y-4 ">
                                 {/* <div className="flex gap-2" >
                                        {post.fields.tags.map((tag) => (
                                            <Badge 
                                            key={tag} 
                                            className="bg-slate-200 dark:bg-slate-950">
                                                {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                            </Badge>
                                        ))}
                                 </div> */}
                             </CardContent>     
                             </Card>
                             </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    </section>
}