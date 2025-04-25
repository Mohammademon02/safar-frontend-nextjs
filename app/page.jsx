import DownloadApp from "@/components/DownloadApp/DownloadApp";
import JoinUsSection from "@/components/JoinUsSection/JoinUsSectionl";
import OurFleet from "@/components/OurFleet/OurFleet";
import StayWithUs from "@/components/StayWithUs/StayWithUs";

export default function Home() {
  return (
    <div>
      <OurFleet />
      <StayWithUs />
      <JoinUsSection />
      <DownloadApp />
    </div>
  );
}
