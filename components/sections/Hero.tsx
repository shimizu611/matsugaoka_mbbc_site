import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[100vw] md:h-[100vh]">
      <Image
        src="/images/hero-image.png"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}
