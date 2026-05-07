import styles from './CheckoutStepper.module.css';

interface CheckoutStepperProps {
    currentStep: 1 | 2 | 3;
}

export default function CheckoutStepper({ currentStep }: CheckoutStepperProps) {
    return (
        <div className={styles.checkoutStepper}>
            <div className={currentStep === 1 ? styles.currentStep : styles.step}>1</div>
            <div className={currentStep === 2 ? styles.currentStep : styles.step}>2</div>
            <div className={currentStep === 3 ? styles.currentStep : styles.step}>3</div>
            <div className={styles.backArrow}></div>
            <div className={styles.frontTopArrow}></div>
            <div className={styles.frontBottomArrow}></div>
        </div>
    );
}