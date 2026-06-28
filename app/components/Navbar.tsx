export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <a href="/" className="text-2xl font-black tracking-widest">
          UBT
        </a>

        <div className="hidden gap-8 text-sm font-bold uppercase tracking-wider md:flex">
          <a href="/" className="transition hover:text-red-500">
            Home
          </a>
          <a href="/roster" className="transition hover:text-red-500">
            Superstars
          </a>
          <a href="/vote" className="transition hover:text-red-500">
            Vote
          </a>
          <a href="/leaderboard" className="transition hover:text-red-500">
            Leaderboard
          </a>
          <a href="#" className="transition hover:text-red-500">
            Champions
          </a>
          <a href="#" className="transition hover:text-red-500">
            History
          </a>
        </div>
      </div>
    </nav>
  );
}