import '../styles/Header.css'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
	const {store} = useContext(Context);

  return (
		<div className="header">
			<div className="button-wrap">
				<Link to="/">Главная</Link>
				{ 
					store.token ? 
					<Link onClick={() => store.logout()}>Выйти</Link> :		
					<>	
					<Link to="/auth">Вход</Link>
					</>	
				}

			</div>
		</div>
  );
})

export default Header;