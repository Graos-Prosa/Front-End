import Navbar from "../../components/navbar/Navbar";

export default function HomePage() {
  return (
    <div className="divDebug">
      <Navbar type={"primary"} itensInCart={3} />
      <p className="pDebug">Página inicial</p>
    </div>
  );
}