import styles from "./TrackingBar.module.css";
import type { ComponentType } from "react";


type Step = {
  label: string;
  icon: ComponentType;
  updateDate?: string;
};

interface StepProgressBarProps {
  steps: Step[]
}

export default function StepProgressBar({ steps }: StepProgressBarProps) {
  const totalSteps = steps.length;

  const safeTotal = totalSteps > 1 ? totalSteps : 2;

  let currentStep = 0;

  steps.forEach((step) => {
    if (step.updateDate) {
      currentStep++;
    }
  });

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
            <span
              className={`${styles.textBar} ${isCompleted? styles.completed : isCurrent ? styles.current : styles.upcoming}`}>
              {step.label}
            </span>
            <div
              className={`${styles.icon} ${
                index < currentStep ? styles.active : ""
              }`}
            >
              <Icon />
            </div>
            <span className={styles.dateStyle}>{step.updateDate}</span>
          </div>
        );
      })}
    </div>
  );
}