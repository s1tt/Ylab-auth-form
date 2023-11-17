import { useContext } from 'react';
import { PopupContext } from '../../contexts/PopupContext';
import styles from './Popup.module.css';
import crossIco from '/cross.svg';

const Popup = () => {
	const { closePopup, popupMessages } = useContext(PopupContext);

	return (
		<div className={styles['popup-wrapper']} onClick={closePopup}>
			<div className={styles.popup} onClick={e => e.stopPropagation()}>
				<h2 className={styles.title}>{popupMessages.title}</h2>
				<p className={styles.message}>{popupMessages.message}</p>
				<button className={styles.btn} onClick={closePopup}>
					<img className={styles.cross} src={crossIco} alt='Close popup' />
				</button>
			</div>
		</div>
	);
};

export default Popup;
