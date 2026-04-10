export default function Schedule(){
    const practiceDays = [
        "木曜 16:15～18:00 （第1週を除く）",
        "金曜 18:00～20:30 （第1週を除く）",
        "土曜・日曜 （随時）",
    ]

    return(
        <section className="py-12 md:py-16">
            <div className="w-full md:w-1/2 text-left">
                <div className="flex">
                    <div className="w-1 h-15 bg-black mr-4"/>
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-500">
                            主な練習日
                        </p>
                        <h2 className="mt-2 font-bold text-4xl uppercase">
                            Schedule
                        </h2>
                    </div>
                </div>
                {/**リスト部分 */}
                <div className="px-4 py-8">
                    {practiceDays.map((day, index)=>(
                        <div key={index} className="flex items-start gap-4">
                            <div className="mt-5 w-4 h-4 border-gray-400 flex-shrink-0" />
                            <p className="text-gray-800 font-medium py-4">
                                {day}
                            </p>
                        </div>    
                    ))}
                </div>
            </div>
        </section>
    )
}