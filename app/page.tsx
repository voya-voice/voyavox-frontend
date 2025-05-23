import Buttons from "@/components/Buttons";
import Demo from "@/components/Demo/Demo";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";


export default function Home() {

  return (
    <main className="min-h-screen flex flex-col justify-between items-center">

      <section className="h-screen flex flex-col justify-between items-center pt-44 pb-3">

        <Hero />

        <div className="flex flex-col items-center gap-5 sm:gap-10 max-w-[1024px] px-6 sm:px-12">
          <Buttons />
          <LogoSlider />
        </div>

      </section>

      <Demo />

    </main>
  );
}
