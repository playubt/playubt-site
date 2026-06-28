import SuperstarGrid from "../components/SuperstarGrid";
import { supabase } from "../components/supabaseClient";

export default async function RosterPage() {
  const { data: superstars, error } = await supabase
    .from("superstars")
    .select("*")
    .order("name");

  if (error) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        <h1 className="text-4xl font-black">Roster</h1>
        <pre className="mt-6 text-red-500">{JSON.stringify(error, null, 2)}</pre>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
          UBT Roster
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase sm:text-7xl">
          Current Superstars
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Every active UBT competitor starts at 0-0. Records, titles, and
          tournament wins will update as league history is created.
        </p>

        <SuperstarGrid superstars={superstars || []} />
      </div>
    </main>
  );
}