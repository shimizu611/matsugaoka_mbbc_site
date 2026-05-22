import FadeIn from "@/components/ui/FadeIn"

export default function Schedule(){
    const boysPracticeDays = [
        "水曜 18:40～20:30 （第1・第3週）",
        "木曜 16:15～18:00 （第1週を除く）",
        "金曜 18:00～20:30 （第1週を除く）",
        "土曜・日曜 （随時）",
    ]
    const girlsPracticeDays = [
        "水曜 18:40～20:30 （第2・第4週）",
        "木曜 16:15～18:00 （第1週）",
        "金曜 18:30～20:30 （第1週を除く）",
        "土曜・日曜 （随時）",
    ]

    return(
        <FadeIn>
            <section id="schedule" className="scroll-mt-20 px-4 md:px-0 py-12 md:py-16">
                <div className="flex">
                    <div className="w-1 h-16 bg-black mr-4"/>
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
                {/**男子練習スケジュール */}
                <div className="px-4 py-8">
                    <h3 className="px-2 text-xl font-bold">男子</h3>
                    {boysPracticeDays.map((day, index)=>(
                        <div key={index} className="flex items-start gap-4">
                            <p className="text-xl py-3">□</p>
                            <p className="text-gray-800 font-medium py-4">
                                {day}
                            </p>
                        </div>    
                    ))}
                </div>
                {/**女子練習スケジュール */}
                <div className="px-4 py-8">
                    <h3 className="px-2 text-xl font-bold">女子</h3>
                    {girlsPracticeDays.map((day, index)=>(
                        <div key={index} className="flex items-start gap-4">
                            <p className="text-xl py-3">□</p>
                            <p className="text-gray-800 font-medium py-4">
                                {day}
                            </p>
                        </div>    
                    ))}
                </div>

                {/**練習コメント */}
                <div>
                    <p className="px-2 pt-8">※ 選手のレベルによって、練習日・時間が異なります。</p>
                </div>
            </section>
        </FadeIn>
    )
}