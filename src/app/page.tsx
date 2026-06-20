import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Section1Pioneer from "@/components/Section1Pioneer";
import Section2Lifestyle from "@/components/Section2Lifestyle";
import Section3Narrative from "@/components/Section3Narrative";
import Section4Pillars from "@/components/Section4Pillars";
import Section5Legacy from "@/components/Section5Legacy";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Section1Pioneer />
      <Section2Lifestyle />
      <Section3Narrative />
      <Section4Pillars />
      <Section5Legacy />
      <Footer />
    </>
  );
}