import classes from '../../styles/UI/Button.module.css'

const Button = (props) => {
  return (
    <button 
			className={classes.myBtn} 
			value={props.value}
			onClick={props.onClick}
			type={props.type}>
			{props.children}
		</button>
  );
}

export default Button;