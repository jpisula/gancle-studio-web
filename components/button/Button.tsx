import styles from './Button.module.scss';

interface ButtonProps {
  role: string;
  type?: 'button' | 'reset' | 'submit';
  text: string;
}

const Button = ({ role, text, type = 'button' }: ButtonProps) => {
  return (
    <button role={role} type={type} className={styles.button}>
      <span className='p'>{text}</span>
    </button>
  );
};

export default Button;
