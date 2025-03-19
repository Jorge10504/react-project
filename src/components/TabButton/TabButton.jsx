import "./TabButton.css";

export default function TabButton({ children }) {
  function handleClick() {
    console.log("I got clicked!");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
