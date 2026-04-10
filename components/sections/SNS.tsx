import { FaInstagram } from "react-icons/fa"

export default function SNS(){
    return(
        <section id="sns" className="scroll-mt-20 md:px-4 py-12 md:py-16">
            <div className="flex">
                <div className="w-1 h-16 bg-black mr-4"/>
                <div>
                    <p className="text-sm font-semibold tracking-widest text-gray-500">
                        ソーシャルネットワーク
                    </p>
                    <h2 className="mt-2 font-bold text-4xl uppercase">
                        SNS
                    </h2>
                </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
                <a
                    href="https://instagram.com/acount"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-6 ml-6 text-gray-700 hover:text-pink-500 transition"
                >
                    <FaInstagram className="w-10 h-10" />
                    <span className="text-2xl">Instagram</span>

                </a>
            </div>
        </section>
    )
}