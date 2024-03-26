import { client } from "@/lib/client";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-swicher";
import Post from "@/interfaces/post";
import HeroCarousel from "@/components/hero-carousel";




export default async function Home() {
const response = await client.getEntries({
content_type: "blog",
});



const posts: Post[] = response.items ?? [];
// console.log(posts[0].fields.tags);

return <section className="lg:px-16 px-2">
    <HeroCarousel posts={posts}/>
</section> } 
  // <section className="flex justify-center items-center gap-x-4">
  //   {posts.map((post) => (
  //      <article key={post.sys.id} className="flex flex-col gap-y-2">
  //       <img
  //         src={`https:${post.fields.image.fields.file.url}`}
  //         alt={post.fields.image.fields.title}
  //         className="w-20 h-9 object-cover"
  //       />              
  //       {/* Agrega el código para mostrar el PDF */}
  //         <Link href={`https:${post.fields.image.fields.file.url}`} passHref>
  //             <button>Ver imagen</button>
  //         </Link>
  // probando los cambios con git pull
  //          <h2 className="text-2x1 font-bold ">
  //            <Link href={`/blog/${post.fields.slug}`}>{post.fields.title}</Link>
  //          </h2>
  //          <p className="text-gray-500">{post.fields.description}</p>
  //          <Link href={`/blog/${post.fields.slug}`}>{post.fields.title}Leer más</Link>    
  //      </article>
  //    ))}
  //  </section>
  
