import Scene from "@/components/three/Scene";
import Preloader from "@/components/ui/Preloader";
import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import ProjectsPreview from "@/components/projects/ProjectsPreview";
import CTA from "@/components/cta/CTA";
import AlternanceSection from "@/components/ui/AlternanceSection";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col min-h-screen bg-brand-light overflow-x-hidden">
      <Preloader />

      <Header />
      <Scene />
      
      <div className="z-10 flex flex-col">
        <Hero />
        <AlternanceSection />
        <ProjectsPreview />
        <CTA />
      </div>

    </main>
  );
}
