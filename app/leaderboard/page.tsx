import { supabase } from "../components/supabaseClient";

export default async function LeaderboardPage() {
  const { data: superstars, error } = await supabase
    .from("superstars")
    .select("id, name, wins, losses, image_url, votes(id)")
    .order("name");

  if (error) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        <h1 className="text-4xl font-black">Leaderboard</h1>
        <pre className="mt-6 text-red-500">{JSON.stringify(error, null, 2)}</pre>
      </main>
    );
  }

  const leaderboard = [...(superstars || [])]
    .map((star) => ({
      ...star,
      vote_count: star.votes?.length || 0,
    }))
    .sort((a, b) => b.vote_count - a.vote_count);

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
          Community Voting
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase sm:text-7xl">
          Live Leaderboard
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          The top vote-getters earn a place in the next UBT tournament.
        </p>

        <div className="mt-12 overflow-hidden border border-zinc-800 bg-zinc-950">
          {leaderboard.map((star, index) => (
            <div
              key={star.id}
              className="grid grid-cols-[80px_1fr_120px] items-center border-b border-zinc-800 px-5 py-4 last:border-b-0"
            >
              <p className="text-2xl font-black text-red-600">
                #{index + 1}
              </p>

              <div className="flex items-center gap-4">
  <div className="h-20 w-16 overflow-hidden rounded border border-zinc-700 bg-zinc-900">
    <img
      src={star.image_url}
      alt={star.name}
      className="h-full w-full object-cover"
    />
  </div>

  <div>
    <h2 className="text-xl font-black uppercase">{star.name}</h2>
    <p className="text-sm text-zinc-500">
      Record: {star.wins}-{star.losses}
    </p>
  </div>
</div>

              <p className="text-right text-2xl font-black">
                {star.vote_count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}