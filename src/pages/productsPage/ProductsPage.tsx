import StoreArea from "../../components/layouts/storeArea/StoreArea";
import Navbar from "../../components/common/navbar/Navbar";
import FormLogin from "../../components/common/formLogin/FormLogin";
import Footer from "../../components/common/footer/Footer";

import styles from "./ProductsPage.module.css";
import { useState } from "react";


//mock
import { IS_LOGGED } from "../../data/mocks/User.mock"
import Button from "../../components/common/button/Button";
import { productsMock } from "../../data/mocks/Products.mock";

export default function ProductsPage() {

  const [productsLoaded, setProductsLoaded] = useState<number>(8);

  function handleLoadMoreProducts() {

    if (productsLoaded + 8 >= productsMock.length) {
      setProductsLoaded(productsMock.length)
      return;
    }

    setProductsLoaded(productsLoaded + 8);

  }

  return (

    <div className={styles.homePage}>
      
      <Navbar type={"third"} itensInCart={2} />

      <StoreArea maxProducts={productsLoaded} productsPage={true} style={{marginBottom: "50px"}} />

      <div className={styles.loadMoreProductsButtonArea}>
        <Button type={"secondary"} textContent="Carregar mais produtos" style={{width: "80%", padding: "10px", marginTop: "20px"}} onClick={() => handleLoadMoreProducts()} />
      </div>

      {IS_LOGGED && <FormLogin />}

      <Footer />

    </div>
    
  );
}