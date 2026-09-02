import StoreArea from "../../components/layouts/storeArea/StoreArea";
import Navbar from "../../components/common/navbar/Navbar";
import FormLogin from "../../components/common/formLogin/FormLogin";
import Footer from "../../components/common/footer/Footer";

import styles from "./ProductsPage.module.css";


//mock
import { IS_LOGGED } from "../../data/mocks/User.mock"

export default function ProductsPage() {

  return (
    <div className={styles.homePage}>
      
      <Navbar type={"third"} itensInCart={2} />

      <StoreArea maxProducts={6} productsPage={true} style={{marginBottom: "50px"}} />

      {IS_LOGGED && <FormLogin />}

      <Footer />

    </div>
    
  );
}