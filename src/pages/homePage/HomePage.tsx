import Header from "../../components/layouts/header/Header";
import TopAd from "../../components/common/topAd/TopAd";
import Navbar from "../../components/common/navbar/Navbar";

import styles from "./HomePage.module.css";

export default function HomePage() {

  return (
    <div className={styles.homePage}>
      <TopAd ads={[
        {text: "Aproveite nossas ofertas!", route: "/"},
        {text: "Frete grátis para todo o Brasil!", route: "/"},
        {text: "Compre 2 e leve 3!", route: "/"}
      ]}/>
      <Navbar type={"primary"} itensInCart={2} />
      <Header />
    </div>
  );
}