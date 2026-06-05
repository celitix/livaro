import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { AboutSplit } from "@/components/sections/about-split";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { CTABanner } from "@/components/sections/cta-banner";
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <FeaturedProjects />
      <ProcessTimeline />
      <AboutSplit />
      <FeaturesGrid />
      <Testimonials />
      <CTABanner />
    </>
  );
}
