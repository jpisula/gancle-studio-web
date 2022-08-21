import classNames from 'classnames';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './HorizontalStepper.module.scss';

const steps = [
  {
    title: 'Krok 1: Otrzymaliśmy Twoją wiadomość',
    description: (
      <>
        <p className='smaller'>
          Na tym etapie sprawdzamy Twój opis oraz przygotowujemy dla Ciebie
          specjalny formularz, dzięki któremu będziemy mogli dopytać Cię o
          więcej szczegółów. Na podstawie tego formularza w następnych krokach
          będziemy mogli przygotować ofertę.
        </p>
        <p className='smaller'>Nasze usługi: </p>
        <ul>
          <li>
            <p className='smaller'>Tworzenie stron internetowych</p>
          </li>
          <li>
            <p className='smaller'>
              Aktualizowanie (serwis) istniejących stron internetowych
            </p>
          </li>
          <li>
            <p className='smaller'>Audyty stron (SEO, design, wydajność)</p>
          </li>
        </ul>

        <p className='smaller'>
          <br />
          Aby poznać lepiej nasze usługi zapraszamy na podstronę NASZA OFERTA.
        </p>

        <p className='smaller'>
          <br />
          Zapytanie o wykonanie usługi można również kierować:
        </p>
        <ul>
          <li>
            <p className='smaller'>
              Telefonicznie: <a href='tel:+48608462001'>(+48) 608-462-001</a>
            </p>
          </li>
          <li>
            <p className='smaller'>
              Mailowo:{' '}
              <a href='mailto: biuro@gancle-studio.pl'>
                biuro@gancle-studio.pl
              </a>
            </p>
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'Krok 2: Analizujemy Twój formularz',
    description: (
      <>
        <p className='smaller'>
          Po otrzymaniu wypełnionego przez Ciebie formularza nasi specjaliści
          przygotowują konkretną ofertę.
        </p>
        <p className='smaller'>Przedstawiona przez nas oferta składa się z:</p>
        <ul>
          <li>
            <p className='smaller'>
              Podsumowanie wymagań jakie powinna spełniać nowa strona
            </p>
          </li>
          <li>
            <p className='smaller'>
              Wycenę prac do wykonania przy stronie (podane ceny są cenami
              netto) wraz z szacowanym czasem realizacji zamówienia
            </p>
          </li>
          <li>
            <p className='smaller'>
              Cennik usług dodatkowych (wsparcie techniczne / hosting / inne)
            </p>
          </li>
          <li>
            <p className='smaller'>Opis procesu realizacji zamówienia</p>
          </li>
        </ul>

        <p className='smaller'>
          W przypadku usług innych niż stworzenie strony internetowych, oferta
          będzie odpowiednio uproszczona.
        </p>
        <p className='smaller'>
          Nasze oferty pisane są w sposób przystępny dla osób nie zaznajomionych
          w technikalia. Staramy się, aby każdy punkt oraz pojęcie było
          odpowiednio wytłumaczone. W razie wątpliwości jesteśmy zawsze dostępni
          i chętnie odpowiadamy na pytania.
        </p>
      </>
    )
  },
  {
    title: 'Krok 3: Wysyłamy ofertę współpracy',
    description: (
      <>
        <p className='smaller'>
          Po otrzymaniu od nas oferty współpracy masz 30 dni na odpowiedź. W
          przypadku braku odpowiedzi w podanym terminie, cały proces należy
          przeprowadzić ponownie.
        </p>
        <p className='smaller'>
          Na tym etapie możesz zawnioskować o zmiany w ofercie, które po naszej
          analizie wprowadzimy albo podejmiemy negocjacje.
        </p>
        <p className='smaller'>
          W przypadku rezygnacji z naszych usług prosimy o informację zwrotną -
          wraz z przedstawieniem oferty zaczynamy przygotowywać nasz
          harmonogram, aby umożliwić sprawne wykonanie usługi.
        </p>
      </>
    )
  },
  {
    title: 'Krok 4: Podpisujemy umowę o współpracę',
    description: (
      <>
        <p className='smaller'>
          Po akceptacji oferty przygotujemy umowę o współpracę, która będzie
          wiążąca zarówno dla nas jak i dla Ciebie. Nasze umowy są czytelne,
          proste i nie zawierają fragmentów dopisanych małym druczkiem.
        </p>
        <p className='smaller'>
          Umowa jest podpisywana, aby zabezpieczyć zarówno nas jak i Ciebie.
          Opisujemy w niej sposób postępowania w przypadku opóźnień lub sporów
          (które nie występują, ale zawsze trzeba się zabezpieczyć ;) ).
        </p>
        <p className='smaller'>
          Gratulacje! Od teraz jesteśmy członkami jednego zespołu, który ma
          jeden cel - spełnić Twoje wszystkie oczekiwania i sprawić, że Twoja
          marka urośnie. Podczas współpracy jesteśmy mocno nastawieni na kontakt
          z klientem.
        </p>
        <p className='smaller'>
          Naszą tradycją są cotygodniowe aktualizacje z procesu realizacji
          Twojej usługi.
        </p>
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
          <h3 className={classNames('h2', styles.title)}>{el.title}</h3>
          {el.description}
        </div>
      ))}
    </div>
  );
};

export default HorizontalStepper;
