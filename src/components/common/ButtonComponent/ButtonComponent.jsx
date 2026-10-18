import { Link } from 'react-router-dom';
import './ButtonComponent.css';

export default function ButtonComponent({ text, to, transparent = false, ...props }) {
  return (
    <Link
      {...props}
      className={`common-button${transparent ? ' common-button-transparent' : ''}`}
      to={to}
    >
      {text}
    </Link>
  );
}
