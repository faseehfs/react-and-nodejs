"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about")  
  }

  return (
    <main>
      <h1>Welcome!</h1>
      <p>This is a Next.js application.</p>
      <button id="about-btn" onClick={handleClick}>About</button>
    </main>
  );
}
