import { client } from "@/lib/client";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-swicher";

interface post {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    slug: string;
    body: Object;
    description: string;
    image: {
      fields: {
        title: String;
        file: {
          url: string;
        };
      };
    };
  };
}

export default async function Home() {
const response = await client.getEntries({
content_type: "blog",
});


const posts: post[] = response.items ?? [];
console.log(posts);

  return (
     <section className="flex justify-center items-center gap-x-4"> 
       {
         <div>
           <ThemeSwitcher />
         </div>
         /* Aquí se coloca el botón de cambio de tema */
       }
       {posts.map((post) => (
         <article key={post.sys.id} className="flex flex-col gap-y-2">
           <h2 className="text-2xl font-bold">
             <Link href={`/blog/${post.fields.slug}`}>
                 {post.fields.title}
             </Link>
           </h2>
           <p className="text-gray-500">{post.fields.description}</p>
           <a href={`/blog/${post.fields.slug}`} className="text-blue-500 underline">
             Leer más
           </a>
           {/* Mostrar el PDF si existe */}
      
       
         </article>
       ))}
     </section>
   );
}