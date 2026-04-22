import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div className="divDebug">
      <Navbar type={"primary"} itensInCart={2} />
    </div>
  );
}