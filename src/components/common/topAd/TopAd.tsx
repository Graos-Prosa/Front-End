import styles from './TopAd.module.css';
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from 'react';

import { truncateString } from '../../../utils/Util';

interface AdItem {
    text: string;
    route: string;
}

interface TopAdProps {
    ads?: AdItem[];
}

export default function TopAd({ ads }: TopAdProps) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [direction, setDirection] = useState<
        "left" | "right"
    >("right");

    const [isAnimating, setIsAnimating] = useState(false);

    if (!ads || ads.length === 0) return null;

    function nextAd() {

        if (isAnimating) return;

        setDirection("right");
        setIsAnimating(true);

        setTimeout(() => {

            setCurrentIndex((prev) =>
                prev === ads.length - 1
                    ? 0
                    : prev + 1
            );

            setIsAnimating(false);

        }, 300);
    }

    function prevAd() {

        if (isAnimating) return;

        setDirection("left");
        setIsAnimating(true);

        setTimeout(() => {

            setCurrentIndex((prev) =>
                prev === 0
                    ? ads.length - 1
                    : prev - 1
            );

            setIsAnimating(false);

        }, 300);
    }

    useEffect(() => {

        const interval = setInterval(() => {
            nextAd();
        }, 10000);

        return () => clearInterval(interval);

    }, [currentIndex, isAnimating]);

    const currentAd = ads[currentIndex];

    return (
        <div className={styles.topAd}>
            <IoIosArrowBack
                className={styles.topAdIcon}
                onClick={prevAd}
            />
            <div
                className={`
                    ${styles.topAdContent}
                    ${isAnimating
                        ? direction === "right"
                            ? styles.exitLeft
                            : styles.exitRight
                        : direction === "right"
                            ? styles.enterRight
                            : styles.enterLeft
                    }
                `}
            >
                <p className={styles.topAdText}>
                    {truncateString(currentAd.text, 58)}
                </p>
                <Link
                    to={currentAd.route}
                    className={styles.topAdLink}
                >
                    saiba mais
                </Link>
            </div>
            <IoIosArrowForward
                className={styles.topAdIcon}
                onClick={nextAd}
            />
        </div>
    );
}