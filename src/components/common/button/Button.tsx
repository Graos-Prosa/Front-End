import styles from "./Button.module.css"
import type { CSSProperties } from "react";

interface ButtonProps {
    type: "primary" | "secondary";
    style?: CSSProperties;
    onClick: () => void;
    textContent: string | React.ReactNode;
}

export default function Button({type, style, onClick, textContent}: ButtonProps) {
    const buttonType: string =
    type === "primary"
        ? styles.primaryButton
        : styles.secondaryButton;

    return (
        <button
            onClick={onClick}
            style={style}
            className={buttonType}
        >
            {textContent}
        </button>
    );
}