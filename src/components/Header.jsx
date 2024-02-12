import '../styles/Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
		<div className="header">
			<div className="button-wrap">
				<Link to="/main">Главная</Link>
				<Link to="/auth">Вход</Link>
				<Link to="/register">Регистрация</Link>
			</div>
		</div>
  );
}

export default Header;