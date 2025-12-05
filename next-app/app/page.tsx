import CountBtn from "@/components/CountBtn";
// Here, CountBtn is simply the local variable name you choose to assign to its default export.
// You could rename it like this: import Whatever from "@/components/CountBtn";

export default function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>Below is a Button which is stored in the top level 'components' folder. It exists as a file named 'CountBtn.jsx'.</p>
      <p>'CountBtn.jsx' starts with "use client";, which makes it a client component, so that we can use 'useState'.</p>
      <CountBtn />
    </main>
  );
}
