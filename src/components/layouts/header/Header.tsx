import styles from "./Header.module.css";
import fotoHome from "../../../assets/fotoHome.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={fotoHome} alt="Foto da página inicial" className={styles.fotoHome} />
        </header>
    );
}