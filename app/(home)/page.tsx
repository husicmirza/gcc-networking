import Features from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground className="-mt-12 md:-mt-36 pt-36">
      <div className="flex flex-col min-h-screen">
        <Hero />
        <Features />
      </div>
    </AuroraBackground>
  );
}
