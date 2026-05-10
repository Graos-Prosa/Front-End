import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import styles from './AlternativeInfoCard.module.css';

interface InfoCardProps {
    imageSrc: string;
    imageAlt: string;
    linkTo: string;
    onClick?: () => void;
}

export default function AlternativeInfoCard({ imageSrc, imageAlt, linkTo, onClick }: InfoCardProps) {
    return (
        <div className={styles.infoCard}>
            <div className={styles.productImageContainer} onClick={onClick}>
                <img src={imageSrc} alt={imageAlt} className={styles.productImage} />
                <div className={styles.productDescriptionContainer}>
                    <p className={styles.productDescription}>{linkTo}</p>
                    <span className={styles.cardRedirectArrow}>
                        <FaArrowUpRightFromSquare className={styles.redirectArrow} />
                    </span>
                </div>
            </div>
        </div>
    );            
}