import { supabase } from "../../components/supabaseClient";
import { notFound } from "next/navigation";

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="border border-zinc-800 bg-zinc-950/70 p-6 text-center transition hover:border-red-600">
      <p className="text-sm font-black uppercase tracking-widest text-zinc-400">
        {label}
      </p>
      <p className="mt-4 text-5xl font-black text-white">{value}</p>
    </div>
  );
}

function TitleCard({
  label,
  value,
  image,
}: {
  label: string;
  value: number;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center border border-zinc-800 bg-zinc-950/70 p-6 text-center transition hover:border-red-600 md:flex-row md:gap-8">
      <img src={image} alt={label} className="h-24 w-auto object-contain" />
      <div>
        <p className="text-sm font-black uppercase tracking-widest text-zinc-400">
          {label}
        </p>
        <p className="mt-3 text-5xl font-black text-white">{value}</p>
      </div>
    </div>
  );
}

export default async function SuperstarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: superstar, error } = await supabase
    .from("superstars")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !superstar) {
    notFound();
  }
    const record = `${superstar.wins ?? 0}-${superstar.losses ?? 0}`;

  const totalMatches = (superstar.wins ?? 0) + (superstar.losses ?? 0);

  const winPercentage =
    totalMatches === 0
      ? "0%"
      : `${Math.round(((superstar.wins ?? 0) / totalMatches) * 100)}%`;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-zinc-900 px-6 py-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.28),transparent_35%),linear-gradient(to_bottom,#020617,#000000)]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <a
            href="/roster"
            className="mb-10 inline-block text-sm font-black uppercase tracking-widest text-zinc-400 hover:text-red-500"
          >
            ← Back to Roster
          </a>

          <p className="text-sm font-black uppercase tracking-[0.45em] text-red-600">
            Superstar Profile
          </p>

          <h1 className="mt-4 text-6xl font-black uppercase tracking-tight sm:text-8xl">
            {superstar.name}
          </h1>

          <p className="mt-3 text-2xl font-black uppercase tracking-widest text-red-600">
            {superstar.nickname}
          </p>

       <div className="mx-auto mt-12 flex h-[520px] max-w-4xl items-end justify-center overflow-hidden bg-transparent">
  <img
    src={superstar.image_url}
    alt={superstar.name}
    className="h-full w-auto object-contain drop-shadow-[0_0_60px_rgba(185,28,28,0.45)]"
  />
</div>
                  <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 divide-x divide-zinc-800 border-y border-zinc-800 py-8">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-zinc-500">
                Overall
              </p>
              <p className="mt-2 text-5xl font-black text-red-600">
                {superstar.overall}
              </p>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-widest text-zinc-500">
                Height
              </p>
              <p className="mt-2 text-5xl font-black">{superstar.height || "TBD"}</p>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-widest text-zinc-500">
                Weight
              </p>
              <p className="mt-2 text-5xl font-black">{superstar.weight || "TBD"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-red-700" />
            <h2 className="text-3xl font-black uppercase tracking-wide">
              UBT Career
            </h2>
            <div className="h-px flex-1 bg-red-700" />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
  <StatCard
  label="Tournament Appearances"
  value={superstar.tournament_appearances ?? 0}
/>

<StatCard
  label="Match Record"
  value={record}
/>

<StatCard
  label="Win Percentage"
  value={winPercentage}
/>

<StatCard
  label="Current Streak"
  value={superstar.current_streak ?? 0}
/>
</div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <TitleCard
              label="Weekly Tournament Titles"
              value={superstar.weekly_titles ?? 0}
              image="/images/weekly.png"
            />

            <TitleCard
              label="Ultimate Tournament Titles"
              value={superstar.ultimate_titles ?? 0}
              image="/images/ultimate.png"
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="border border-red-700/70 bg-zinc-950/60 p-8">
              <h3 className="text-3xl font-black uppercase">
                UBT Timeline
              </h3>

              <div className="mt-8 space-y-6 border-l border-zinc-700 pl-6">
                <div>
                  <p className="font-black uppercase text-red-600">Debut</p>
                  <p className="mt-2 text-zinc-400">
                    {superstar.name} has not made his UBT debut yet.
                  </p>
                </div>

                <div>
                  <p className="font-black uppercase text-red-600">
                    First Victory
                  </p>
                  <p className="mt-2 text-zinc-400">TBD</p>
                </div>

                <div>
                  <p className="font-black uppercase text-red-600">
                    First Tournament Title
                  </p>
                  <p className="mt-2 text-zinc-400">TBD</p>
                </div>
              </div>
            </div>

            <div className="border border-red-700/70 bg-zinc-950/60 p-8 text-center">
              <h3 className="text-3xl font-black uppercase">Recent Matches</h3>

              <div className="mt-16">
                <p className="text-4xl font-black uppercase text-zinc-700">
                  No Matches Yet
                </p>
                <p className="mx-auto mt-4 max-w-md text-zinc-400">
                  {superstar.name} has not competed in any PlayUBT matches yet.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-zinc-800 pt-8 text-center">
            <p className="text-lg font-black uppercase tracking-[0.25em] text-zinc-300">
              Their story. Your choice. Our tournament.
            </p>
            <p className="mt-2 text-lg font-black uppercase tracking-[0.25em] text-red-600">
              You book it. We simulate it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}