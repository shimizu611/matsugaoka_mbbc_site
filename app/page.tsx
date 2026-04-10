import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Welcome from "@/components/sections/Welcome";
import Schedule from "@/components/sections/Schedule";
import SNS from "@/components/sections/SNS";
import Place from "@/components/sections/Place"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Welcome />
      <section className="mx-auto max-w-2xl md:max-w-5xl">
        <div className="grid md:grid-cols-2">
          <Schedule />
          <SNS />
        </div>
      </section>
      <Place />
      <Contact />
      <Footer />
    </>
  )
}