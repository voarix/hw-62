import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container p-3">
      <div className="text-center">
        <p className="mb-2">
          2025 Pied Piper. Все права защищены.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to='/' className="text-decoration-none text-muted">
            Политика конфиденциальности
          </Link>
          <span className="text-muted">|</span>
          <Link to='/' className="text-decoration-none text-muted">
            Условия использования
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;