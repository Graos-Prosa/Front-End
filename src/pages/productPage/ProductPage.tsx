import Button from "../../components/common/button/Button";
import Comment from "../../components/common/comment/Comment";
import Navbar from "../../components/common/navbar/Navbar";
import { formatPrice } from "../../utils/FormatPrice";

import styles from "./ProductPage.module.css";

// interface ProductPageProps{
//   price: number
// }

export default function ProductPage() {
  return (
    <div className={styles.productPage}>
      <div className={styles.productInfo}>
        <h1>Café Arábica Variedade Catuaí 144</h1>
      </div>
      <div className={styles.productCategories}></div>
      <div className={styles.commentArea}>
        <Navbar type={"secondary"} />
        <Comment
          client={"Julia"}
          rating={5}
          commentTitle="Incrivel"
          commentDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse aperiam recusandae sed ea nisi error possimus fugiat laborum quia accusantium natus, nulla animi laudantium, reprehenderit ducimus. Enim, fuga ex."
          reviewDate={new Date(2026, 9, 12)}
        />
      </div>
      <div className={styles.purchaseBar}>
        <div className={styles.text}>
          <p>Subtotal: </p>
          <span>R${formatPrice(67.67)}</span>
        </div>
        <Button
          type="primary"
          style={{"width": "100%", "padding": 15, "fontSize": 14}}
          onClick={() => console.log("a")}
          textContent="Adicionar a sacola"
        />
      </div>
    </div>
  );
}
