
import Banner from "@/Components/HomeComponents/Bannar/Banner";
import Projects from "@/Components/HomeComponents/Projects/Projects";
import Resume from "@/Components/HomeComponents/Resume/Resume";
import Services from "@/Components/HomeComponents/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Banner />

      <div className="container mx-auto">
        <Services />
        <Resume />
        <Projects/>
      </div>
      
    </main>
  );
}
