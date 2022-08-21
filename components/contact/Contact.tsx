import classNames from 'classnames';
import Button from 'components/button/Button';
import HorizontalStepper from 'components/horizontal-stepper/HorizontalStepper';
import { useState } from 'react';
import styles from './Contact.module.scss';

interface IContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formState, setFormState] = useState<IContactForm>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    return;
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.upperDivider}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='1440'
          height='300'
          preserveAspectRatio='none'
          viewBox='0 0 1440 300'
        >
          <g mask='url("#SvgjsMask1050")' fill='none'>
            <path
              d='M 0,101 C 144,114.8 432,178.6 720,170 C 1008,161.4 1296,80.4 1440,58L1440 300L0 300z'
              fill='rgba(237, 30, 121, 1)'
            ></path>
          </g>
          <defs>
            <mask id='SvgjsMask1050'>
              <rect width='1440' height='300' fill='#ffffff'></rect>
            </mask>
          </defs>
        </svg>
      </div>
      <div className={classNames('container', styles.contact)}>
        <div className={styles.contactForm}>
          <h2>Zainteresowany współpracą?</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <input
                type='text'
                placeholder='Imię i nazwisko'
                value={formState?.name}
                onChange={(e) => {
                  setFormState({ ...formState, name: e.target.value });
                }}
              />
              <label>Imię i nazwisko</label>
            </div>

            <div className={styles.fieldGroup}>
              <input
                type='text'
                placeholder='Numer telefonu'
                value={formState?.phone}
                onChange={(e) => {
                  setFormState({ ...formState, phone: e.target.value });
                }}
              />
              <label>Numer telefonu</label>
            </div>

            <div className={styles.fieldGroup}>
              <input
                type='email'
                placeholder='Adres e-mail'
                value={formState?.email}
                onChange={(e) => {
                  setFormState({ ...formState, email: e.target.value });
                }}
              />
              <label>Adres e-mail</label>
            </div>

            <div className={styles.fieldGroup}>
              <textarea
                placeholder='Opisz czego potrzebujesz, a my skontaktujemy się z Tobą'
                value={formState?.message}
                onChange={(e) => {
                  setFormState({ ...formState, message: e.target.value });
                }}
              />
              <label>
                Opisz czego potrzebujesz, a my skontaktujemy się z Tobą
              </label>
            </div>

            <label className={styles.privacyPolicy}>
              Wysyłając formularz zgadzasz się z polityką prywatności naszego
              serwisu.
            </label>

            <Button type='submit' role='button' text='Wyślij' />
          </form>
        </div>
        <div className={styles.contactInfo}>
          <h2>Co się stanie z wiadomością od Ciebie?</h2>
          <HorizontalStepper />
        </div>
      </div>
    </section>
  );
};

export default Contact;
