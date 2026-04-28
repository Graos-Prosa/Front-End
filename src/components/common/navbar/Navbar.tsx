import styles from "./Navbar.module.css"
import SideBarMenu from "../sideBarMenu/SideBarMenu";
import { IoMenuOutline, IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

import LogoGpDourado from "../../../assets/logo-gp-dourado.png"
import LogoGpBranco from "../../../assets/logo-gp-branco.png"

interface NavbarProps {
    type: "primary" | "secondary" | "third" | "fourth";
    itensInCart?: number
}

export default function Navbar({ type, itensInCart = 0 }: NavbarProps) {

    const [menu, setMenu] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 0);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const optionsSideBar = [
        {name: "Início", route:"/"}, 
        {name: "Editar perfil", route:"/edit-profile"}, 
        {name: "Meus endereços", route:"/addresses"},
        {name: "Meus pedidos", route:"/orders"},
        {name: "Nossa historia", route:"/our-story"},
        {name: "Contato", route:""},
        {name: "Ajuda", route:""}
    ]

    const variants = {
        primary: styles.primaryNavbar,
        secondary: styles.secondaryNavbar,
        third: styles.thirdNavbar,
        fourth: styles.fourthNavbar
    };

    const navbarType = variants[type];

    const navbarLogotype =
        type === "primary"
            ? isScrolled
                ? LogoGpDourado
                : LogoGpBranco
            : LogoGpDourado;

    const navbarTheme =
        type === "primary"
            ? isScrolled
                ? styles.mainThemeColor
                : styles.whiteColor
            : styles.mainThemeColor;

    const navbarBorderType =
        type === "primary"
            ? isScrolled
                ? styles.mainThemeBorder
                : styles.whiteThemeBorder
            : type === "secondary"
                ? styles.mainThemeBorder
                : "";

    const navbarScrolled =
        type === "primary" && isScrolled ? styles.primaryScrolled : "";

    const containsItensInBag = itensInCart > 0 ? "" : styles.displayNone;

    return (
        <nav className={`${navbarType} ${navbarBorderType} ${navbarScrolled}`}>
            <IoMenuOutline className={`${styles.menuIcon} ${navbarTheme}`} onClick={() => setMenu(!menu)} />
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
            <SideBarMenu menu={menu} setMenu={setMenu} liOptions={optionsSideBar}/>
        </nav>
    );
}