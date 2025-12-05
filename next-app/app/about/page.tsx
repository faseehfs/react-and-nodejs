import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "About"
}


export default function About() {
    return <>
        <h1>About</h1>
        <p>This is a Next.js application. This is the about page.</p>
    </>
}