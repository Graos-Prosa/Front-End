import styles from './ProductCard.module.css';
import Button from '../button/Button';

import { TiStarFullOutline } from "react-icons/ti";

interface ProductCardProps {
    id: number;
    img: string;
    name: string;
    price: string;
    rating: number;
    amount: number;
    productType: "coffee" | "accessory";
    discount?: number;
}

export default function ProductCard({id, img, name, price, rating, amount, productType, discount = 0}: ProductCardProps) {

    function truncateString(name: string) {
        const max = 33;
        return name.length > max ? name.slice(0, max) + "..." : name;
    }

    function verifyAmount(amount: number) {
        if (amount <= 0) {
            return "Esgotado";
        } else {
            return "Adicionar a sacola";
        }
    }

    function goToProductPage(productId: number) {
        console.log(`Navegar para a página do produto com ID: ${productId}`);
        //tratar a lógica de navegação aqui, como usar o react-router para redirecionar para a página do produto
    }

    function handleAddToCart(productId: number, productAmount: number) {
        if (productAmount > 0) {
            console.log(`Adicionar produto com ID: ${productId} ao carrinho`);
            //tratar a lógica de adicionar ao carrinho aqui, como atualizar o estado global ou fazer uma requisição para o backend
        } else {
            console.log(`Produto com ID: ${productId} está esgotado`);
            //tratar a lógica de produto esgotado aqui, como mostrar uma mensagem para o usuário ou desabilitar o botão
        }
    }

    return (
        <div className={styles.productCard} key={id}>
            <div className={styles.productType}>
                <p>{productType === "coffee" ? "Cafés" : "Acessórios"}</p>
            </div>
            <div className={styles.discountCard} style={{display: (discount && discount > 0) && (amount > 0) ? "" : "none"}}>
                <p>{discount && discount > 0 ? `${discount}% off` : ""}</p>
            </div>
            <img src={img} alt={name} className={styles.productImage} onClick={() => {goToProductPage(id)}} style={{ filter: amount <= 0 ? "grayscale(100%)" : "none" }}/>
            <div className={styles.productInfo} onClick={() => {goToProductPage(id)}}>
                <p className={styles.name}>{truncateString(name)}</p>
                <div className={styles.infoContainer}>
                    <div className={styles.ratingContainer}>
                        <p className={styles.rating}>{rating.toFixed(1)}</p>
                        <TiStarFullOutline className={styles.star} />
                    </div>
                    <h3 className={styles.price} style={{color: amount <= 0 ? '#AEAEAE' : ''}}>{price}</h3>
                </div>
            </div>
            <Button 
                type={"primary"} 
                style={{width: '100%', height: '34px', fontSize: '12px', borderRadius: '5px', backgroundColor: amount <= 0 ? '#AEAEAE' : '', cursor: amount <= 0 ? 'not-allowed' : '', border: amount <= 0 ? '1px solid #AEAEAE' : ''}} 
                onClick={() => {handleAddToCart(id, amount)}}
                textContent={verifyAmount(amount)}
            />
        </div>
    );
}