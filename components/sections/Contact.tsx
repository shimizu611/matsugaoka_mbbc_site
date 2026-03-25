"use client"

export default function ContactForm() {
    return (
        <form
            className=""
            onSubmit={(e)=> {
                e.preventDefault();
                alert("送信処理は未実装です（次で実装します）");
            }}
        >
            <input
                className=""
                placeholder="お名前"
            />
            <input
                className=""
                placeholder="メールアドレス"
            />
            <textarea
                className=""
                placeholder="内容（体験希望日、学年、経験など）"
            />
            <button
                className=""
                type="submit"
            >
                送信
            </button>
        </form>
    )
}