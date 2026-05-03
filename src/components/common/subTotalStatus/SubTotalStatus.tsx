import styles from "./SubTotalStatus.module.css"

type bagItems = {
  id: number;
  price: number;
  quantity: number;
};

interface HomePageProps {
  bagItems?: bagItems[];
  deliveryPrice?: number;
}

export default function SubTotalStatus({ bagItems, deliveryPrice = 15.90 }: HomePageProps) {

    const calculateSubtotal = (bagItems: bagItems[] | undefined) => {
        if (!bagItems) return 0;
        return bagItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    let subtotal = calculateSubtotal(bagItems);

    return (
        <div className={styles.subTotalStatus}>
            <div className={styles.divSubTotalStatus}>
                <p className={styles.pSubTotalStatus}>Subtotal</p>
                <p className={styles.pSubTotalStatus}>Taxa de entrega</p>
                <p className={styles.pSubTotalStatus}>Total</p>
            </div>
            <div className={styles.divSubTotalStatus}>
                <p className={styles.pSubTotalStatusValue}>R$ {subtotal.toFixed(2)}</p>
                <p className={styles.pSubTotalStatusValue}>R$ {deliveryPrice.toFixed(2)}</p>
                <p className={styles.pSubTotalStatusValue}>R$ {subtotal <= 0 ? "0,00" : (subtotal + deliveryPrice).toFixed(2)}</p>
            </div>
        </div>
    );
}