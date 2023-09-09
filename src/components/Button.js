import "./Button.css";

const Button = ({ typeButton }) => {
  return (
    <a href="/#" class={typeButton}>
      Get Started
    </a>
  );
};

export default Button;
