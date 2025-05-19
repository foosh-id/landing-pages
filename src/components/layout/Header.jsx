import '../../styles/tailwind.css';
import FooshLogo from '../../assets/FooshLogo_SecondaryLogo.png';

export default function Header() {
  return (
    <header className="header">
      <img src={FooshLogo} alt="Foosh" className="logo" />
    </header>
  );
}
