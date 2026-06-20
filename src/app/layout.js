import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ক্লায়েন্টের ব্র্যান্ড অনুযায়ী মেটাডেটা আপডেট
export const metadata = {
  title: "Final Cut Multimedia | Cinematic Video Production",
  description: "Premium video production and photography services in Charlotte, NC.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-dark-bg text-white min-h-screen flex flex-col">
        {/* পুরো অ্যাপকে স্মুথ স্ক্রলিংয়ের আওতায় আনা হলো */}
        <SmoothScrollProvider>
          
          {/* আপনার shared ফোল্ডারের হেডার */}
          <Header />
          
          
          <main className="flex-grow">
            {children}
          </main>
          <Footer></Footer>
       
          
        </SmoothScrollProvider>
      </body>
    </html>
  );
}