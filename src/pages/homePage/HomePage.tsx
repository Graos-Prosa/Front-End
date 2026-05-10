import Header from "../../components/layouts/header/Header";
import TopAd from "../../components/common/topAd/TopAd";
import StoreArea from "../../components/layouts/storeArea/StoreArea";
import Navbar from "../../components/common/navbar/Navbar";
import InfoArea from "../../components/layouts/infoArea/InfoArea";
import FormLogin from "../../components/common/formLogin/FormLogin";
import AlternativeInfoCard from "../../components/common/alternativeInfoCard/AlternativeInfoCard";
import Footer from "../../components/common/footer/Footer";

import styles from "./HomePage.module.css";

import FotoBanner from "../../assets/top-view-delicious-coffee-table.jpg"

//mock
import { topAdsMock } from "../../data/mocks/TopAd.mock";
import { IS_LOGGED } from "../../data/mocks/User.mock"

export default function HomePage() {

  return (
    <div className={styles.homePage}>

      <TopAd
        ads={topAdsMock}
      />
      
      <Navbar type={"primary"} itensInCart={2} />

      <Header />

      <StoreArea maxProducts={6}/>

      <InfoArea />

      {IS_LOGGED && <FormLogin />}

      <AlternativeInfoCard imageSrc={FotoBanner} imageAlt={"dad"} linkTo={"Conheça cada etapa do processo com o grão de café"} onClick={() => alert("Foi!")}/>

      <Footer />

    </div>
  );
}