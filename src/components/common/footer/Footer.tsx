import {
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

import { MdOutlineLocalPhone, MdOutlineEmail  } from "react-icons/md";

import { FiFacebook } from "react-icons/fi";

import visa from "../../../assets/visa.png";
import mastercard from "../../../assets/mastercard.png";
import elo from "../../../assets/elo.png";
import amex from "../../../assets/amex.png";
import pix from "../../../assets/pix.png";
import boleto from "../../../assets/boleto.png";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <span>Redes Sociais</span>

        <div className={styles.iconsDiv}>
          <a href="https://www.instagram.com/graoseprosa?igsh=NjB0eXdvejZoaXo2"
            className={styles.icons}
          >
            <FaInstagram />
          </a>
          <a href="" className={styles.icons}><FaWhatsapp /></a>
          <a href="https://www.facebook.com/share/1DxGMvSLAK"
            className={styles.icons}
          >
            <FiFacebook />
          </a>
        </div>
      </div>

      <div className={styles.row}>
        <span>Meios de pagamento</span>

        <div className={styles.paymentIcons}>
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={elo} alt="Elo" />
          <img src={amex} alt="American Express" />
          <img src={pix} alt="Pix" />
          <img src={boleto} alt="Boleto" />
        </div>
      </div>

      <div className={styles.row}>
        <span>Contato</span>

        <div className={styles.iconsDiv}>
          <a href="" className={styles.icons}><MdOutlineLocalPhone /></a>
          <a href="" className={styles.icons}><MdOutlineEmail /></a>
        </div>
      </div>

      <div className={styles.bottomFooter}>

        <div className={styles.bottomTop}>
          <span><strong>Grãos & Prosa Comércio de Café</strong></span>
          <span>CNPJ: 62.431.423/0001-13</span>
          <span>Rio de Janeiro - RJ</span>
        </div>

        <div className={styles.bottom}>
          <span>
            <strong>Política de Privacidade</strong>
            <br />
            <strong>Termos de Uso</strong>
          </span>
          <span>
            2026@ Copyright. All
            <br />
            rights reserved
          </span>
        </div>

      </div>
    </footer>
  );
}