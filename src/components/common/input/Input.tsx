import styles from "./Input.module.css"
import type { CSSProperties } from "react";

interface InputProps {
    type: "text" | "number" | "password" | "date" | "email";
    styleType: "primary" | "secondary" | "third" | "fourth";
    style?: CSSProperties;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export default function Input({type, style, styleType, placeholder, onChange, value}: InputProps) {
    const variants = {
        primary: styles.primaryInput,
        secondary: styles.secondaryInput,
        third: styles.thirdInput,
        fourth: styles.fourthInput
    };

    const inputType = variants[styleType];
    
    return <input type={type} style={style} className={inputType} placeholder={placeholder} onChange={onChange} value={value}></input>
}