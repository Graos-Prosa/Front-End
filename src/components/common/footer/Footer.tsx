import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

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

        <div className={styles.icons}>
          <FaInstagram />
          <FaWhatsapp />
          <FiFacebook />
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

        <div className={styles.icons}>
          <FaPhoneAlt />
          <FaEnvelope />
        </div>
      </div>

      <div className={styles.bottom}>
        <span>Grãos e Prosa</span>

        <span>
          2026@ Copyright. All
          <br />
          rights reserved
        </span>
      </div>
    </footer>
  );
}