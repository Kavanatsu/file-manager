import classes from '../../styles/UI/Button.module.css'

const Button = (props) => {
  return (
    <button className={classes.myBtn} value={props.value}>
			{props.children}
		</button>
  );
}

export default Button;