import Form  from '../components/UI/Form';
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import { useContext, useState } from 'react';
import { Context } from '../index';
import { Link, useNavigate } from 'react-router-dom';


const Auth = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const {store} = useContext(Context);
	const [showPassword, setShowPassword] = useState(false)
	const navigate = useNavigate();

  return (
    <div className="App">
			<h1>Авторизация</h1>
			<Form id="login_form" onSubmit={() => {
					store.login(login, password);
					navigate('/');}}>
				<Input 
					onChange={e => setLogin(e.target.value)}
					value={login}
					label="Логин" 
					type="text" 
					id='login'/>
				<Input
					onChange={e => setPassword(e.target.value)}
					value={password}
					label="Пароль" 
					type={showPassword ? 'text' : 'password'}
					id='password'/>
					{	password ?
						<>
							<Button 
								type="button" 
								onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Скрыть пароль' : 'Показать пароль'}</Button>
						</> :
						<></>
						}
					{/* (e) => e.preventDefault() */}
				<Button type="submit">Войти</Button>
			</Form>
			<h2>Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link></h2>
    </div>
  );
}

export default Auth;