import classes from '../../styles/UI/Form.module.css'

const Form = (props) => {
  return (
    <form className={classes.myForm}>
			{props.children}
		</form>
  );
}

export default Form;