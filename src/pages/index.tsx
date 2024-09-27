import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LargeImage from "@/components/LargeImage";
import MainImages from "@/components/MainImages";
import SellCoffee from "@/components/SellCoffee";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SellCoffee />
      <MainImages />
      <AboutUs />
      <LargeImage />
      <Footer />
    </main>
  );
}
