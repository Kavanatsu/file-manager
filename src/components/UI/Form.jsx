import classes from '../../styles/UI/Form.module.css'

const Form = (props) => {
  return (
    <form className={classes.myForm} id={props.id} onSubmit={props.onSubmit}>
			{props.children}
		</form>
  );
}

export default Form;