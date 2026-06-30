import { supabase } from "../components/supabaseClient";
import VoteButton from "../components/VoteButton";
export default async function VotePage() {
  const { data: superstars, error } = await supabase
    .from("superstars")
    .select("*")
    .order("name");

  if (error) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        <h1 className="text-4xl font-black">Vote</h1>
        <pre className="mt-6 text-red-500">{JSON.stringify(error, null, 2)}</pre>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
          Community Voting
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase sm:text-7xl">
          Vote For Week One
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Choose who you want to see compete in the next UBT tournament.
          The top vote-getters enter the bracket.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {superstars?.map((star) => (
            <div
              key={star.id}
              className="border border-zinc-800 bg-zinc-950 p-5"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
  {star.image_url ? (
    <img
  src={star.image_url}
  alt={star.name}
  className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(185,28,28,0.35)]"
/>
  ) : (
    <p className="text-5xl font-black text-zinc-800">
      {star.name
        .split(" ")
        .map((word: string) => word[0])
        .join("")}
    </p>
  )}
</div>

              <h2 className="mt-5 text-xl font-black uppercase">{star.name}</h2>

              <p className="mt-2 text-sm text-zinc-500">
                Record: {star.wins}-{star.losses}
              </p>

              <VoteButton superstarId={star.id} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}