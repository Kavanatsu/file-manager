
import classes from '../../styles/UI/Modal.module.css'

const ModalWindow = ({children, visible, setVisible}) => {

	const rootClasses = [classes.modalWindow]
	if(visible) {
		rootClasses.push(classes.active);
	}

  return (
		<div className={rootClasses.join('')}>
			<div className={classes.modalWindowContent}>
				<button className={classes.modalWindowButton} onClick={() => setVisible(false)}>X</button>
				{children}
			</div>
		</div>
  );
}

export default ModalWindow;