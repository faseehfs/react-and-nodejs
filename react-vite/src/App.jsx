function MyButton() {
  function handleClick() {
    alert("You clicked MyButton.");
  }

  return (
    <button onClick={handleClick}>
      I'm a Button
    </button>
  );
}


export default function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <MyButton />
    </>
  )
}