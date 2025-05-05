import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import NextTopLoader from "nextjs-toploader";
import ScrollTop from "@/components/Common/ScrollTop/ScrollTop";
import "@/app/globals.css";
import "@/public/css/custom.css";
import "@/public/css/main.css";
import { ToastWrapper } from "@/components/Common/ToastWrapper/ToastWrapper";
import { AuthProvider } from "@/AuthProvider/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Safar BD",
  description: "Safar BD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color='#EE4266'
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          easing='ease'
          speed={200}
          zIndex={1600}
          showAtBottom={false}
          showSpinner={false}
        />
        <AuthProvider>
          <ToastWrapper>
            <Navbar />
            {children}
            <Footer />
            <ScrollTop />
          </ToastWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
