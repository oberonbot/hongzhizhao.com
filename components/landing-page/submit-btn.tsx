import React from "react";

export default function SubmitBtn() {
  return (
    <button
      type="submit"
      className="mt-6 w-fit border border-foreground/25 bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-background transition hover:bg-transparent hover:text-foreground disabled:opacity-60"
    >
      Send
    </button>
  );
}
