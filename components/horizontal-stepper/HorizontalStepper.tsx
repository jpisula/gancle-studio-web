import classNames from 'classnames';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './HorizontalStepper.module.scss';

const steps = [
  {
    title: 'Otrzymaliśmy Twoją wiadomość',
    description: (
      <>
        <p>Siema</p>
      </>
    )
  },
  {
    title: 'Otrzymaliśmy Twoją wiadomość',
    description: (
      <>
        <p>Siema 2</p>
      </>
    )
  },
  {
    title: 'Otrzymaliśmy Twoją wiadomość',
    description: (
      <>
        <p>Siema 3</p>
      </>
    )
  },
  {
    title: 'Otrzymaliśmy Twoją wiadomość',
    description: (
      <>
        <p>Siema 4</p>
      </>
    )
  }
];

const HorizontalStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className={styles.stepper}>
      <div className={styles.steps}>
        <div
          className={styles.stepsLine}
          style={{ width: `${(currentStep / 3) * 100}%` }}
        ></div>
        {steps.map((el, index) => (
          <div
            key={uuidv4()}
            className={classNames(
              styles.step,
              currentStep === index && styles.activeStep
            )}
            onClick={() => {
              setCurrentStep(index);
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {steps.map((el, index) => (
        <div
          key={uuidv4()}
          data-step={index}
          className={classNames(
            styles.content,
            currentStep !== index && styles.hidden
          )}
        >
          <h3>{el.title}</h3>
          {el.description}
        </div>
      ))}
    </div>
  );
};

export default HorizontalStepper;
