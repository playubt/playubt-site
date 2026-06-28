export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.35),transparent_35%),linear-gradient(to_bottom,#020617,#000000)]" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.45em] text-red-500">
            Ultimate Battle Tournament
          </p>

          <h1 className="text-6xl font-black italic tracking-tight sm:text-8xl">
            PLAY<span className="text-red-600">UBT</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
            The official home of weekly WWE 2K tournaments, rankings,
            champions, match history, and UBT records.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a className="rounded border border-red-600 bg-red-700 px-8 py-4 font-black uppercase tracking-widest hover:bg-red-600">
              Enter Tournament
            </a>

            <a className="rounded border border-zinc-600 px-8 py-4 font-black uppercase tracking-widest hover:border-white">
              View Rankings
            </a>
          </div>
          <div className="mt-20 animate-bounce">
  <p className="mb-3 text-xs uppercase tracking-[0.4em] text-zinc-500">
    Scroll
  </p>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto h-8 w-8 text-red-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</div>
        </div>
      </section>
      <section className="border-y border-zinc-800 bg-zinc-950 px-6 py-24 text-center">
  <p className="text-sm font-bold uppercase tracking-[0.4em] text-red-500">
    Community Voting Opens Monday
  </p>

  <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black uppercase tracking-tight sm:text-6xl">
    The community decides who enters.
    <br />
    The ring decides who survives.
  </h2>
</section>

<section className="bg-black px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
      How It Works
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-4">
      {[
        ["01", "Community Votes", "Fans recommend the competitors for the weekly tournament."],
        ["02", "8 Enter", "Eight selected wrestlers enter a single-elimination bracket."],
        ["03", "One Champion", "The winner leaves with the PlayUBT Championship."],
        ["04", "History Continues", "Every tournament adds to the league’s official history."],
      ].map(([number, title, text]) => (
        <div key={number} className="border border-zinc-800 bg-zinc-950 p-6">
          <p className="text-4xl font-black text-red-600">{number}</p>
          <h3 className="mt-4 text-xl font-black uppercase">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-black px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <p className="text-center text-sm font-bold uppercase tracking-[0.35em] text-red-500">
      Championships
    </p>

    <h2 className="mt-6 text-center text-4xl font-black uppercase sm:text-6xl">
      Two titles. One league.
    </h2>

    <div className="mt-14 grid gap-8 md:grid-cols-2">
      <div className="border border-zinc-800 bg-zinc-950 p-6 text-center">
        <img
          src="/images/weekly.png"
          alt="UBT Weekly Tournament Championship"
          className="mx-auto w-full max-w-xl"
        />

        <h3 className="mt-8 text-2xl font-black uppercase">
          Weekly Tournament Championship
        </h3>

        <p className="mt-4 text-zinc-400">
          Awarded every week to the winner of the UBT tournament.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 p-6 text-center">
        <img
          src="/images/ultimate.png"
          alt="UBT Ultimate Championship"
          className="mx-auto w-full max-w-xl"
        />

        <h3 className="mt-8 text-2xl font-black uppercase">
          Ultimate Championship
        </h3>

        <p className="mt-4 text-zinc-400">
          The top prize in UBT. The championship every competitor wants.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-gradient-to-b from-black to-zinc-950 px-6 py-24 text-center">
  <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
    Week One Tournament
  </p>

  <h2 className="mt-6 text-5xl font-black italic uppercase sm:text-7xl">
    Premieres Sunday July 5th
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-zinc-300">
    The first eight competitors will be chosen by the community. One will become
    the first champion in UBT history.
  </p>
</section>
<footer className="border-t border-zinc-800 bg-black px-6 py-12 text-center">
  <h2 className="text-3xl font-black tracking-widest">
    PLAY<span className="text-red-600">UBT</span>
  </h2>

  <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400">
    Community voting opens Monday. Tournament Episode airs on Sunday.
    <br />Eight competitors. One champion. History starts now.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest">
    <a href="#" className="border border-zinc-700 px-5 py-3 hover:border-red-600 hover:text-red-500">
      X
    </a>
    <a href="#" className="border border-zinc-700 px-5 py-3 hover:border-red-600 hover:text-red-500">
      YouTube
    </a>
    <a href="#" className="border border-zinc-700 px-5 py-3 hover:border-red-600 hover:text-red-500">
      Twitch
    </a>
    <a
  href="#"
  className="border border-zinc-700 px-5 py-3 hover:border-red-600 hover:text-red-500"
>
  TikTok
</a>

<a
  href="#"
  className="border border-zinc-700 px-5 py-3 hover:border-red-600 hover:text-red-500"
>
  Instagram
</a>
  </div>

  <p className="mt-10 text-xs uppercase tracking-[0.35em] text-zinc-600">
    © 2026 PlayUBT. Built for the community.
  </p>
</footer>
    </main>
  );
}