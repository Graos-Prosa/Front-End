import styles from './MiniProductCard.module.css';

import { truncateString } from '../../../utils/Util';

interface MiniProductCardProps {
    id: number;
    img: string;
    name: string;
    type: string;
    weight: string;
    price: string;
    amount: string;
}

export default function MiniProductCard({ id, img, name, type, weight, price, amount }: MiniProductCardProps) {
  return (
    <div className={styles.miniProductCard} key={id}>
      <img src={img} alt="Imagem do produto" className={styles.productImage} />
      <div className={styles.productInfo}>
        <div className={styles.productDetails}>
            <p className={styles.productName}>{truncateString(name, 33)}</p>
            <p className={styles.productType}>{type}</p>
            <p className={styles.productWeight}>{weight}</p>
        </div>   
        <div className={styles.priceAndAmount}>
            <p className={styles.productPrice}>{price}</p>
            <p className={styles.productAmount}>quantidade: <strong>{amount}</strong></p>
        </div>
      </div>
    </div>
  );
}