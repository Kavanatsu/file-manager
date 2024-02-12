import classes from '../../styles/UI/Input.module.css'

const Input = (props) => {
  return (
		<label for={props.id}> {props.label} <br/>
    	<input className={classes.myInput} type={props.type} id={props.id}/>
		</label>
  );
}

export default Input;