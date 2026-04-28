import styles from "./TrackingBar.module.css";
import type { ComponentType } from "react";


type Step = {
  label: string;
  icon: ComponentType;
};

type StepProgressBarProps = {
  steps: Step[];
  currentStep: number;
};

export default function StepProgressBar({ steps, currentStep }: StepProgressBarProps) {
  const totalSteps = steps.length;

  const safeTotal = totalSteps > 1 ? totalSteps : 2;

  const progressWidth =
    ((currentStep - 1) / (safeTotal - 1)) * 100;

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progress}
        style={{ width: `${progressWidth}%` }}
      />

      {steps.map((step, index) => {
        const isCompleted = index < currentStep - 1;
        const isCurrent = index === currentStep - 1;

        const Icon = step.icon;

        return (
          <div className={styles.progressStep} key={index}>
            <div
              className={`${styles.icon} ${
                index < currentStep ? styles.active : ""
              }`}
            >
              <Icon />
            </div>

            <span
              className={`${styles.textBar} ${isCompleted? styles.completed : isCurrent ? styles.current : styles.upcoming}`}>
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}