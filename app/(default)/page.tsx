export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      {/* https://coolors.co/a8763e-f7f3e3-ecf0f1-6f1a07-2b2118 */}
      <Hero />
      <Features />
      <Zigzag /> */}
      <Testimonials />
      <Newsletter />
    </>
  );
}
