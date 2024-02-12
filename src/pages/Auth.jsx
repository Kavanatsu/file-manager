import Form  from '../components/UI/Form';
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import '../styles/App.css'

function Auth() {

  return (
    <div className="App">
			<h1>Авторизация</h1>
			<Form>
				<Input label="Логин" type="text" id='login'/>
				<Input label="Пароль" type="password" id='password'/>
				<Button>Войти</Button>
			</Form>
    </div>
  );
}

export default Auth;