import styles from "./StoreArea.module.css";
import Button from "../../common/button/Button";
import ProductCard from "../../common/productCard/ProductCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//mock
import { productsMock } from "../../../data/mocks/Products.mock";
import Input from "../../common/input/Input";

interface StoreAreaProps {
    style?: React.CSSProperties;
    maxProducts?: number;
    productsPage?: boolean;
}

export default function StoreArea({ style, maxProducts = 0, productsPage = false }: StoreAreaProps) {
    type FilterType = "Todos" | "Acessorios" | "Cafés";

    const [selectedFilter, setSelectedFilter] = useState<FilterType>("Todos");

    const navigate = useNavigate();

    const handleSelectedButton = (filter: FilterType) => {
        return filter === selectedFilter ? "primary" : "secondary";
    }

    const filteredProducts = productsMock.filter((product) => {

    if (selectedFilter === "Todos") {
        return true;
    }

    if (selectedFilter === "Cafés") {
        return product.productType === "coffee";
    }

    if (selectedFilter === "Acessorios") {
        return product.productType === "accessory";
    }

    return false;
});

    function goToProductsPage() {
        navigate("/products")
    }

    function handleFilterClick(filter: FilterType) {
        setSelectedFilter(filter);
    };


    

    return (
        <section id={styles.storeArea} style={{...style}}>
            <div className={styles.storeContent}>
                {
                    productsPage ?
                        <>
                            <h3>Descubra nossos produtos</h3>
                            <p>Grãos selecionados, aroma intenso e sabor marcante. Um café equilibrado para transformar seu dia em um momento especial.</p>
                        </>
                    :
                        <>
                            <h3>Conheça nossos grãos selecionados</h3>
                            <p>Grãos especiais e acessórios selecionados para elevar sua experiência. Tudo o que você precisa para preparar um café marcante, com qualidade e personalidade.</p>
                        </>
                }
            </div>
            {
                productsPage ?
                    <div className={styles.filterAreaProductsPage}>
                        <Input type={"text"} style={{width: "100%", padding: "5px"}} styleType={"primary"} placeholder={"Buscar produto"} onChange={(e) => console.log(e.target.value)} value="" /> {/*Consertar dps aqui !!!!!*/}
                        <Button type={handleSelectedButton("Todos")} textContent={"Test"} onClick={() => handleFilterClick("Todos")} style={{width: "33%", padding: "10px", fontSize: "12px"}}/> {/*Consertar dps aqui !!!!!*/}
                    </div>
                :
                    <div className={styles.filterArea}>
                        <Button type={handleSelectedButton("Todos")} textContent={"Todos"} onClick={() => handleFilterClick("Todos")} style={{width: "33%", padding: "10px", fontSize: "12px"}}/>
                        <Button type={handleSelectedButton("Acessorios")} textContent={"Acessorios"} onClick={() => handleFilterClick("Acessorios")} style={{width: "33%", padding: "10px", fontSize: "12px"}}/>
                        <Button type={handleSelectedButton("Cafés")} textContent={"Cafés"} onClick={() => handleFilterClick("Cafés")} style={{width: "33%", padding: "10px", fontSize: "12px"}}/>
                    </div>
                }
            <div className={styles.productsArea}>
                {filteredProducts.slice(0, maxProducts).map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
            <div className={styles.amountProductsArea}>
                <p className={styles.amountProducts}><strong>{maxProducts} de {filteredProducts.length}</strong> produtos</p>
                <ProgressBar current={maxProducts} total={filteredProducts.length}/>
                <Button type={"secondary"} textContent="Ver todos os produtos" style={{width: "100%", padding: "10px", marginTop: "20px", display: productsPage ? "none" : "block"}} onClick={goToProductsPage} />
            </div>
        </section>
    );
}

interface ProgressBarProps {
    current: number;
    total: number;
}

function ProgressBar({ current, total }: ProgressBarProps) {

    const progress = (current / total) * 100;

    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
    );
}