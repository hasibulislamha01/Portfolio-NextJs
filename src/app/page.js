
import Banner from "@/Components/HomeComponents/Bannar/Banner";
import Resume from "@/Components/HomeComponents/Resume/Resume";
import Services from "@/Components/HomeComponents/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Banner />
      <Services />
      <Resume/>
    </main>
  );
}
