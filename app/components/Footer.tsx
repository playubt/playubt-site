export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black px-6 py-12 text-center">
      <h2 className="text-3xl font-black tracking-widest">
        UBT
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400">
        Community voting opens Monday.
        Weekly tournaments premiere every Sunday.
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

        <a href="#" className="border border-zinc-700 px-5 py-3 hover:border-red-600 hover:text-red-500">
          TikTok
        </a>

        <a href="#" className="border border-zinc-700 px-5 py-3 hover:border-red-600 hover:text-red-500">
          Instagram
        </a>
      </div>

      <p className="mt-10 text-xs uppercase tracking-[0.35em] text-zinc-600">
        © 2026 UBT
      </p>
    </footer>
  );
}