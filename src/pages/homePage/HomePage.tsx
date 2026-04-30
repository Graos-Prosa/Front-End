import Navbar from "../../components/common/navbar/Navbar";

export default function HomePage() {

  return (
    <div className="divDebug">
      <Navbar type={"secondary"} itensInCart={2} />
      <p className="pDebug">Página inicial</p>
    </div>
  );
}