import Form  from '../components/UI/Form';
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'

function Register() {

  return (
    <div className="App">
			<h1>Регистрация</h1>
			<Form>
				<Input label="Логин" type="text" id='login'/>
				<Input label="Пароль" type="password" id='password'/>
				<Button>Регистрация</Button>
			</Form>
    </div>
  );
}

export default Register;