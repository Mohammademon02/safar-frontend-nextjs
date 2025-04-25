import DownloadApp from "@/components/DownloadApp/DownloadApp";
import JoinUsSection from "@/components/JoinUsSection/JoinUsSectionl";
import OurFleet from "@/components/OurFleet/OurFleet";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <OurFleet />
      <JoinUsSection />
      <DownloadApp />
    </div>
  );
}
