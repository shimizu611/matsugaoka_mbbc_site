import Image from "next/image"

export default function Welcome(){
    return(
        <section id="welcome" className="scroll-mt-20 px-4 py-12 md:px-8 md:py-16">
            <div className="mx-auto max-w-2xl md:max-w-5xl">
                <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
                    {/**画像 */}
                    <div className="md:w-1/2 flex justify-end">
                        <div className="relative w-[90%] md:w-full aspect-[4/3]">
                            <Image
                                src="/images/image002.png"
                                alt="メンバー募集"
                                fill
                                className="rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex text-left">
                            <div className="w-1 h-16 bg-black mr-4"></div>
                            <div>
                                <p className="text-sm font-semibold tracking-widest text-gray-500">
                                    メンバー募集
                                </p>
                                <h2 className="mt-2 font-bold text-4xl uppercase">
                                    Welcome
                                </h2>
                            </div>
                        </div>
                        <div className="pt-6">
                            <p className="mt-4 leading-10 text-gray-700">
                                バスケットボールが好きな子
                            </p>
                            <p className="leading-10 text-gray-700">
                                これから始めてみたい子を募集しています。
                            </p>
                        </div>
                        <div className="pt-6">
                            <p className="mt-4 leading-10 text-gray-700">
                                経験の有無は問いません。
                            </p>
                            <p className="leading-10 text-gray-700">
                                基礎から丁寧に指導し、楽しく続けられる
                            </p>
                            <p className="leading-10 text-gray-700">
                                環境づくりを大切にしています。
                            </p>
                        </div>
                        <div className="pt-6">
                            <p className="mt-4 leading-10 text-gray-700">
                                見学・体験練習も随時受け付けていますので、
                            </p>
                            <p className="leading-10 text-gray-700">
                                お気軽にお問い合わせください。
                            </p>
                        </div>
                    
                    </div>
                </div>

            </div>

        </section>
    )
}