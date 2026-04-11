import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json()

    const { name, kana, school, grade, telNum, email, message, company } = body

    // スパム対策
    if(company) {
        return Response.json({ ok:true})
    }

    try {
        await resend.emails.send({
            from:"onboading@resend.dev",
            to:"shimizu611@gmail.com",
            subject:"お問い合わせがきました。",
            html:`
                <h2>お問い合わせ</h2>
                <p>名前： ${name}</p>
                <p>カナ： ${kana}</p>
                <p>学校： ${school}</p>
                <p>学年： ${grade}</p>
                <p>電話番号： ${telNum}</p>
                <p>メールアドレス： ${email}</p>
                <p>内容： ${message}</p>
            `,
        })

        return Response.json({ ok: true })
    } catch (error) {
        return Response.json({ ok:false }, { status: 500 })
    }
}