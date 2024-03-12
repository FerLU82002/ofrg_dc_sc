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
          }           
        }
    }
  };



export default async function Home() {

  const response = await client.getEntries({
    content_type: "blog",
  })

const posts = response.items ?? [];

console.log(posts[0].fields.image);

  return (
    <section className="flex justify-center items-center gap-x-4">
      {/* Utiliza el componente Link para la navegación interna */}
       posts.map
    </section>
  );
}