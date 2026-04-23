import styles from "./SideBarMenu.module.css"
import { IoCloseOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useEffect } from "react";

type Option = {
  name: string;
  route: string;
};

interface PropsSideBarMenu {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
    liOptions: Option[];
}

export default function SideBarMenu({menu, setMenu, liOptions }: PropsSideBarMenu) {

    // useEffect para bloquear o scroll enquanto o menu lateral estiver aberto.
    useEffect(() => {
        document.body.style.overflow = menu ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menu]);

    return (
        <>
            <div className={`${styles.overlay} ${menu ? styles.show : ""}`} onClick={() => setMenu(false)} />
            <aside className={`${styles.sidebar} ${menu ? styles.open : ""}`}>
                <div className={styles.headerSidebar}>
                    <IoCloseOutline className={`${styles.closeButton}`} onClick={() => setMenu(false)}/>
                    <div className={styles.loginArea}>
                        <span className={styles.backgroundUserIcon}>
                            <FaUser className={`${styles.userIcon}`}/>
                        </span>
                        <p className={styles.userOrLogin}>Entrar</p>
                    </div>     
                </div>
                <ul className={styles.ulSidebar}>
                    {liOptions.map((option) => (
                        <li key={option.name}>
                            <a href={option.route}>{option.name}</a>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}