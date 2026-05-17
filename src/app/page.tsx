import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Specialties from "@/components/sections/Specialties";
import Reviews from "@/components/sections/Reviews";
import Booking from "@/components/sections/Booking";
import Visit from "@/components/sections/Visit";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />
      <Hero />
      <Story />
      <Specialties />
      <Reviews />
      <Booking />
      <Visit />
      <Footer />
    </div>
  );
}
