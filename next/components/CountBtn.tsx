"use client"; // Makes this a client component, allowing us to use `useState`.

import { useState } from "react"

export default function CountBtn() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    return <button onClick={incrementCount}>Clicked {count} Time(s)</button>
}
