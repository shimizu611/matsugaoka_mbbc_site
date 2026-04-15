import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json()

    const { inquiryType, name, kana, teamName, school, grade, gender, phone, email, message, company } = body

    // スパム対策
    if(company) {
        return Response.json({ ok:true})
    }
    try {
        if(inquiryType === "visit") {
            await resend.emails.send({
                from:"onboading@resend.dev",
                to:"shimizu611@gmail.com",
                subject:"見学・体験のお問い合わせがきました。",
                html:`
                    <h2>見学・体験の問い合わせ</h2>
                    <p>名前： ${name}</p>
                    <p>カナ： ${kana}</p>
                    <p>学校： ${school}</p>
                    <p>学年： ${grade}</p>
                    <p>性別： ${gender}</p>
                    <p>電話番号： ${phone}</p>
                    <p>メールアドレス： ${email}</p>
                    <p>内容： ${message}</p>
                `,
            })
        }
        if(inquiryType === "match") {
            await resend.emails.send({
                from:"onboading@resend.dev",
                to:"shimizu611@gmail.com",
                subject:"試合の申し込みがきました。",
                html:`
                    <h2>試合の申し込み</h2>
                    <p>チーム名： ${teamName}</p>
                    <p>メールアドレス： ${email}</p>
                    <p>内容： ${message}</p>
                `,
            })
        }

        return Response.json({ ok: true })
    } catch (error) {
        return Response.json({ ok:false }, { status: 500 })
    }
}