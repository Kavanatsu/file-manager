import Form  from '../components/UI/Form';
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import { useContext, useState } from 'react';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const {store} = useContext(Context);
	const [showPassword, setShowPassword] = useState(false)
	const navigate = useNavigate();


  return (
    <div className="App">
			<h1>Регистрация</h1>
			<Form id="register_form" onSubmit={() => {
					store.register(login, password)
					navigate('/auth')}}>
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
					{/* onClick={ (e) => e.preventDefault() } */}
				<Button type="submit">Регистрация</Button>
			</Form>
    </div>
  );
}

export default Register;