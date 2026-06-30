"use client";

import Link from "next/link";
import { useState } from "react";

export default function SuperstarGrid({ superstars }: { superstars: any[] }) {
  const [search, setSearch] = useState("");

  const filteredSuperstars = superstars.filter((star) =>
    star.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mt-10">
        <input
          type="text"
          placeholder="Search superstars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-zinc-800 bg-zinc-950 px-5 py-4 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none"
        />
      </div>

      <p className="mt-4 text-sm text-zinc-500">
        Showing {filteredSuperstars.length} of {superstars.length} superstars
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredSuperstars.map((star) => (
          <Link
  key={star.id}
  href={`/superstars/${star.name.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`}
  className="group overflow-hidden border border-zinc-800 bg-zinc-950 transition hover:border-red-600"
>
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
  {star.image_url ? (
    <img
      src={star.image_url}
      alt={star.name}
      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
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

            <div className="p-5">
              <h2 className="text-xl font-black uppercase">{star.name}</h2>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="border border-zinc-800 p-3">
                  <p className="text-zinc-500">Record</p>
                  <p className="mt-1 text-xl font-black">
                    {star.wins}-{star.losses}
                  </p>
                </div>

                <div className="border border-zinc-800 p-3">
                  <p className="text-zinc-500">Tourney Wins</p>
                  <p className="mt-1 text-xl font-black">
                    {star.tournament_wins}
                  </p>
                </div>

                <div className="border border-zinc-800 p-3">
                  <p className="text-zinc-500">Weekly</p>
                  <p className="mt-1 text-xl font-black">
                    {star.weekly_titles}
                  </p>
                </div>

                <div className="border border-zinc-800 p-3">
                  <p className="text-zinc-500">Ultimate</p>
                  <p className="mt-1 text-xl font-black">
                    {star.ultimate_titles}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}