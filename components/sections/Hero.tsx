import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[60vw] md:h-[100vh]">
      <Image
        src="/images/hero-image.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}
