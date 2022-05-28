import buttonStyles from './Button.module.scss';

export enum ButtonVariants {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

type ButtonProps = {
  appearance: ButtonVariants;
};

const Button = ({ appearance }: ButtonProps) => {
  return <button className={buttonStyles[appearance]}>Comprar</button>;
};

export default Button;
