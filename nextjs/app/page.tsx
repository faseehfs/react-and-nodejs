import CountBtn from "@/components/CountBtn";
// Here, CountBtn is simply the local variable name you choose to assign to its default export.
// You could rename it like this: import Whatever from "@/components/CountBtn";
import RandomNumberBtn from "@/components/RandomNumberBtn";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>This is the homepage. It showcases some features of Next.js.</p>
      <h2>Client Components</h2>
      <p>
        The button below is a client component. Unlike server components, it can
        handle browser APIs, local state, user interactions, and dynamic
        updates, while server components are limited to static rendering and
        server-side data fetching for better SEO.
      </p>
      <CountBtn />
      <h2>API</h2>
      <p>
        The button below fetches a random number from the route
        'api/random-number'.
      </p>
      <RandomNumberBtn />
    </main>
  );
}
