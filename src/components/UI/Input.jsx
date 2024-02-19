import classes from '../../styles/UI/Input.module.css'

const Input = (props) => {
  return (
		<label htmlFor={props.id}> {props.label} <br/>
    	<input 
				className={classes.myInput} 
				type={props.type} 
				id={props.id} 
				value={props.value} 
				onChange={props.onChange} 
				autoComplete='on' 
				required/>
		</label>
  );
}

export default Input;