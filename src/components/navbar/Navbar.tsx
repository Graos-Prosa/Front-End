import styles from "./Navbar.module.css"
import { IoMenuOutline, IoBagOutline, IoSearchOutline } from "react-icons/io5";

import LogoGpDourado from "../../assets/logo-gp-dourado.png"
import LogoGpBranco from "../../assets/logo-gp-branco.png"

interface NavbarProps {
    type: "primary" | "secondary" | "third" | "fourth";
    itensInCart: number
}

export default function Navbar({ type, itensInCart }: NavbarProps) {
    const variants = {
        primary: styles.primaryNavbar,
        secondary: styles.secondaryNavbar,
        third: styles.thirdNavbar,
        fourth: styles.fourthNavbar
    };

    const navbarType = variants[type];

    const navbarLogotype = type === "primary" ? LogoGpBranco : LogoGpDourado;

    const navbarTheme = type === "primary" ? styles.whiteColor : styles.mainThemeColor;

    const navbarBorderType = type === "primary" ? styles.whiteThemeBorder : type === "secondary" ? styles.mainThemeBorder : "";

    const containsItensInBag = itensInCart > 0 ? "" : styles.displayNone;

    return (
        <nav className={`${navbarType} ${navbarBorderType}`}>
            <IoMenuOutline className={`${styles.menuIcon} ${navbarTheme}`} />
            <img
                className={`${styles.imgGp} ${type === "fourth" ? styles.logoCenter : ""}`}
                src={navbarLogotype}
                alt="Logo grãos e prosa"
                style={{ marginLeft: type === "fourth" ? "0px" : "25px" }}
            />
            {type !== "fourth" && (
                <div className={styles.divIcons}>
                    <div className={styles.bagWrapper}>
                        <IoBagOutline className={`${styles.bagIcon} ${navbarTheme}`} />
                        <span className={`${styles.badge} ${containsItensInBag}`}>{itensInCart}</span>
                    </div>
                    <IoSearchOutline className={`${styles.searchIcon} ${navbarTheme}`} />
                </div>
            )}
        </nav>
    );
}