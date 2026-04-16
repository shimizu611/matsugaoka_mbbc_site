"use client"

import { useState } from "react"
import FadeIn from "@/components/ui/FadeIn"


type inquiryType = "visit" | "match"

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<inquiryType>("visit")
  const [form, setForm] = useState({
    name:"",
    kana:"",
    teamName:"",
    school:"",
    grade:"",
    gender:"",
    phone:"",
    email:"",
    message:"",
    company:"",
})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    
    // バリデーション
    if (inquiryType === "visit"){
      if (
        !form.name ||
        !form.kana ||
        !form.school ||
        !form.gender ||
        !form.grade ||
        !form.email ||
        !form.message){
        alert("必須項目を入力してください")
        return
      }        
    }
    if(inquiryType === "match") {
      if(!form.teamName || !form.email || !form.message){
        alert("必須項目を入力してください")
      }
    }

    setLoading(true)

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        inquiryType,
      })
    })

    setLoading(false)

    if(res.ok) {
      setSuccess(true)
      setForm({ name:"", kana:"", teamName:"", school:"", grade:"", gender:"", phone:"", email:"", message:"", company:"" })

      // 10秒後にコメントを削除
      setTimeout(() => {
        setSuccess(false)
      }, 10000)
    } else {
        alert("送信に失敗しました")
    }
  }



  return (
    <FadeIn>
      <section id="contact" className="scroll-mt-20 w-full px-4 py-16">
        <div className="max-w-2xl md:max-w-5xl mx-auto pb-40">
          <form onSubmit={handleSubmit}>
            {/* 上段 */}
            <div className="flex flex-col md:flex-row gap-8 md:items-start md:justify-between">
              
              {/* 左：タイトル＋説明 */}
              <div className="w-full md:w-1/2">
                <div className="flex">
                    <div className="w-1 h-16 bg-black mr-4"></div>
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-500">
                            お問い合わせ
                        </p>
                        <h2 className="mt-2 font-bold text-4xl uppercase">
                            CONTACT
                        </h2>
                    </div>
                </div>
                <p className="text-gray-600 leading-relaxed py-4 tracking-widest">
                  見学の申し込み、ご質問などございましたら、<br />
                  お気軽にお問い合わせください。
                </p>
                <p className="text-gray-600 leading-relaxed py-4 tracking-widest">
                  交流戦のお申し込みもお待ちしております。
                </p>
              </div>

              {/* 右：基本フォーム */}
              <div className="md:w-1/2">
                <div className="flex-row">
                    <p className="mb-2">【 お問い合わせ種別 】</p>
                    <select
                      name="inquiryType"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value as inquiryType)}
                      className="h-10 mb-4 w-full border rounded bg-[#D0DBE8] text-slate-800"
                    >
                      <option value="visit">見学・体験の申し込み</option>
                      <option value="match">試合の申し込み</option>
                    </select>
                    {/**見学・体験 */}
                    {inquiryType === "visit" && (
                      <>
                        <p className="mb-2">お名前（お子様）</p>
                        <input
                          placeholder="必須"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          type="text" className="input h-10 mb-2 w-full border rounded"
                        />
                        <p className="mb-2">フリガナ</p>
                        <input
                          placeholder="必須"
                          pattern="[\u30A0-\u30FFー\s]+"
                          name="kana"
                          value={form.kana}
                          onChange={handleChange}
                          type="text" className="input h-10 mb-2 w-full border rounded"
                        />
                        <p className="mb-2">現在通っている学校</p>
                        <input
                          placeholder="必須"
                          name="school"
                          value={form.school}
                          onChange={handleChange}
                          type="text" className="input h-10 mb-2 w-full border rounded"
                        />
                        <p className="mb-2">学年</p>
                        <input
                          placeholder="必須"
                          name="grade"
                          value={form.grade}
                          onChange={handleChange}
                          type="text" className="input h-10 mb-2 w-full border rounded"
                        />
                        <p className="mb-2">性別</p>
                        <input
                          placeholder="3年生以降、男女で活動が分かれます。"
                          name="gender"
                          value={form.gender}
                          onChange={handleChange}
                          type="text" className="input h-10 mb-2 w-full border rounded"
                        />
                        <p className="mb-2">電話番号</p>
                        <input
                          placeholder="電話でのご連絡を希望される方は、こちらに記入ください。"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          type="tel" className="input h-10 mb-2 w-full border rounded"
                        />
                      </>
                    )}
                    {inquiryType === "match" && (
                      <>
                        <p className="mb-2">チーム名</p>
                        <input
                          placeholder="必須"
                          name="teamName"
                          value={form.teamName}
                          onChange={handleChange}
                          type="e-mail" className="input h-10 mb-2 w-full border rounded"
                        />
                      </>
                    )}
                    <p className="mb-2">メールアドレス</p>
                    <input
                      placeholder="必須"
                      inputMode="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="e-mail" className="input h-10 mb-2 w-full border rounded"
                    />
                    
                </div>
              </div>
            </div>

            {/* 下段 */}
            <div className="flex flex-col-reverse mb-10 md:flex-row gap-8 items-start">
              
              {/* 左：個人情報 */}
              <div className="w-full md:w-1/2 tracking-widest">
                <p className="mb-2">個人情報の取り扱いについて</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  お預かりした個人情報は、お問い合わせへの対応および<br />
                  当クラブからのご連絡のみに利用いたします。<br /><br />
                  取得した個人情報は、法令に基づく場合を除き、<br />
                  ご本人の同意なく第三者へ提供することはありません。
                </p>
              </div>

              {/* 右：お問い合わせ内容 */}
              <div className="w-full md:w-1/2">
                <p className="mb-2">お問い合わせ内容</p>
                <textarea
                  placeholder="見学の申し込み・練習予定の確認など"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="input h-40 mb-2 w-full resize-none border rounded"
                />

                {/**スパム対策 */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* 送信ボタン */}
            <div className="flex justify-end">
              {success && <p className="text-gray-700">送信が完了しました。</p>}
              <button type="submit" className="bg-[#003366] text-white px-6 py-1 rounded hover:bg-[#003366]/70 transition">
                {loading ? "送信中・・・" : "フォーム送信"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </FadeIn>
  );
}