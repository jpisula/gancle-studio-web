import classNames from 'classnames';
import { useState } from 'react';
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
        <p>Siema</p>
      </>
    )
  },
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
        <p>Siema</p>
      </>
    )
  }
];

const HorizontalStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className={styles.stepper}>
      <div className={styles.steps}>
        {steps.map((el, index) => (
          <div className={styles.step}>{index + 1}</div>
        ))}
      </div>
      {steps.map((el, index) => (
        <div
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
