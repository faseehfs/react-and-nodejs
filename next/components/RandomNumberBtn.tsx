"use client";

import { useState } from "react";

export default function RandomNumberBtn() {
  const [randomNumber, setRandomNumber] = useState("?");

  async function handleClick() {
    const res = await fetch("/api/random-number", { cache: "no-store" });
    const data = await res.json();
    setRandomNumber(data.randomNumber);
  }

  return <button onClick={handleClick}>{randomNumber}</button>;
}
