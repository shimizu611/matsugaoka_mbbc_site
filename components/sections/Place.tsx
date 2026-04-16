import FadeIn from "@/components/ui/FadeIn"

export default function Place(){
    return(
        <FadeIn>
            <section id="place" className="scroll-mt-20 px-4 py-12 md:px-8 md:py-16">
                <div className="mx-auto max-w-2xl md:max-w-5xl">
                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                        <div className="md:w-1/2 text-left">    
                            <div className="flex">
                                <div className="w-1 h-16 bg-black mr-4"/>
                                <div>
                                    <p className="text-sm font-semibold tracking-widest text-gray-500">
                                        練習場所
                                    </p>
                                    <h2 className="mt-2 font-bold text-4xl uppercase">
                                        PLACE
                                    </h2>
                                </div>
                            </div>
                            <div className="px-4 py-8 flex items-start gap-4">
                                <p className="text-xl py-3">□</p>
                                <p className="text-gray-800 font-medium py-4">
                                    明石市立松が丘小学校　体育館
                                </p>
                            </div>    
                        </div>
                        {/** Google Map */}
                        <div className="md:w-1/2">
                            <div className="w-full h-[300px] md:h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13127.56201776531!2d135.0081559554199!3d34.65746809999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008197a806b3ff%3A0xa0394f8fab7ec637!2z5piO55-z5biC56uL5p2-44GM5LiY5bCP5a2m5qCh!5e0!3m2!1sja!2sjp!4v1775769620538!5m2!1sja!2sjp"
                                    className="w-full h-full rounded-xl"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>            
            </section>
        </FadeIn>
    )
}