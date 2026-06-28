import { supabase } from "../components/supabaseClient";

export default async function TestSupabase() {
  const { data, error } = await supabase.from("superstars").select("*");

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="text-4xl font-black">Supabase Test</h1>

      {error && (
        <pre className="mt-6 text-red-500">{JSON.stringify(error, null, 2)}</pre>
      )}

      <pre className="mt-6 text-green-500">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}