import { GoArrowRight } from "react-icons/go";

import styles from './InfoCard.module.css';

interface InfoCardProps {
    text?: string;
    imageSrc: string;
    imageAlt: string;
    bannerTitle?: string;
    linkTo: string;
    onClick?: () => void;
}

export default function InfoCard({ text, imageSrc, imageAlt, bannerTitle, linkTo, onClick }: InfoCardProps) {
    return (
        <div className={styles.infoCard}>
            <div className={styles.infoText}>
                <p className={styles.infoTextP}>{text}</p>
            </div>
            <div className={styles.productImageContainer} onClick={onClick}>
                <img src={imageSrc} alt={imageAlt} className={styles.productImage} />
                <h2 className={styles.productTitle}>{bannerTitle}</h2>
                <div className={styles.productDescriptionContainer}>
                    <p className={styles.productDescription}>Conhecer {linkTo}</p>
                    <GoArrowRight className={styles.productDescriptionIcon} />
                </div>
            </div>
        </div>
    );            
}