import DownloadApp from "@/components/DownloadApp/DownloadApp";
import HeroSection from "@/components/HeroSection/HeroSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import JoinUsSection from "@/components/JoinUsSection/JoinUsSectionl";
import OurFleet from "@/components/OurFleet/OurFleet";
import StayWithUs from "@/components/StayWithUs/StayWithUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurFleet />
      <HowItWorks />
      <StayWithUs />
      <JoinUsSection />
      <DownloadApp />
    </div>
  );
}
