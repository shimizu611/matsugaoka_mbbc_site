export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-sm text-gray-600">ミニバスチーム</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
        楽しく、正しく、強く。
      </h1>
      <p className="mt-4 max-w-2xl text-gray-700">
        体験参加・見学いつでもOK。初心者も歓迎。バスケを通して、挑戦する力と仲間を大切にします。
      </p>

      <div className="mt-6 flex gap-3">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded bg-black px-4 py-2 text-sm text-white"
        >
          お問い合わせ
        </a>
        <a
          href="#schedule"
          className="inline-flex items-center justify-center rounded border px-4 py-2 text-sm"
        >
          練習日を見る
        </a>
      </div>
    </section>
  );
}
