import "./Footer.css";
import logo from "../../images/footer-logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">@2023</p>
        <img className="footer__logo" src={logo} alt="логотип" />
        <p className="footer__text">Все права защищены</p>
      </div>
    </footer>
  );
}

export default Footer;
