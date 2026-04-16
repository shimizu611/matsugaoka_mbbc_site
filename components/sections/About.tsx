import Image from "next/image"
import FadeIn from "@/components/ui/FadeIn"

export default function About() {
    return(
        <FadeIn>
            <section id="about" className="scroll-mt-20 px-4 py-12 md:px-8 md:py-16">
                <div className="mx-auto max-w-2xl md:max-w-5xl">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="md:w-1/2 text-left">
                            <div className="flex">
                                <div className="w-1 h-16 bg-black mr-4"></div>
                                <div>
                                    <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                                        クラブ紹介
                                    </p>
                                    <h2 className="mt-2 font-bold text-4xl uppercase">
                                        ABOUT US
                                    </h2>
                                </div>
                            </div>
                            <h2 className="pt-8 text-4xl">松が丘ミニバスケットボール</h2>
                            <h2 className="py-6 text-4xl">クラブについて</h2>
                            <p className="mt-4 leading-10 text-gray-700">
                                兵庫県の明石市を拠点に活動しています。
                            </p>
                            <p className="mt-4 leading-10 text-gray-700">
                                バスケットボールを通して、「考える力」「挑戦する心」「仲間を大切にする姿勢」を育みます。勝ち負けだけにとらわれず、基礎技術の習得と人間的成長を重視し、あいさつや返事、チームワークを大切にした指導を行っています。
                            </p>
                        </div>
                        {/**画像 */}
                        <div className="md:w-1/2 flex justify-end">
                            <div className="relative w-[90%] md:w-full aspect-[4/3]">
                                <Image
                                    src="/images/image001.JPG"
                                    alt="クラス紹介"
                                    fill
                                    className="rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </FadeIn>
    )
}