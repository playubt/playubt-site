"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function VoteButton({ superstarId }: { superstarId: number }) {
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    setHasVoted(localStorage.getItem("playubt_week_1_voted") === "true");

    function handleVoteUpdate() {
      setHasVoted(localStorage.getItem("playubt_week_1_voted") === "true");
    }

    window.addEventListener("playubt-vote-submitted", handleVoteUpdate);

    return () => {
      window.removeEventListener("playubt-vote-submitted", handleVoteUpdate);
    };
  }, []);

  async function submitVote() {
    if (hasVoted) return;

    const { error } = await supabase.from("votes").insert({
      superstar_id: superstarId,
    });

    if (!error) {
      localStorage.setItem("playubt_week_1_voted", "true");
      setHasVoted(true);
      window.dispatchEvent(new Event("playubt-vote-submitted"));
    } else {
      alert("Vote failed. Please try again.");
    }
  }

  return (
    <button
      onClick={submitVote}
      disabled={hasVoted}
      className={`mt-5 w-full border px-4 py-3 text-sm font-black uppercase tracking-widest text-white transition ${
        hasVoted
          ? "cursor-not-allowed border-zinc-700 bg-zinc-800 text-zinc-400"
          : "border-red-700 bg-red-700 hover:bg-red-600"
      }`}
    >
      {hasVoted ? "Voting Complete" : "Vote"}
    </button>
  );
}