"use client";

import { useEffect, useState } from "react";

const format = () =>
  new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour12: false });

// Renders empty on the server so the time never mismatches during hydration.
export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const first = setTimeout(() => setTime(format()), 0);
    const id = setInterval(() => setTime(format()), 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {time || "--:--:--"} <span className="text-muted">IST</span>
    </span>
  );
}
