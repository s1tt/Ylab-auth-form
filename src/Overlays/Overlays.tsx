import { useContext } from 'react';
import { createPortal } from 'react-dom';
import Loader from '../components/Loader/Loader';
import Popup from '../components/Popup/Popup';
import { LoaderContext } from '../contexts/LoaderContext';
import { PopupContext } from '../contexts/PopupContext';

const overlaysEl = document.getElementById('overlays')!;

const Overlays = () => {
	const { isLoading } = useContext(LoaderContext);
	const { isPopupOpen } = useContext(PopupContext);
	return (
		<>
			{isPopupOpen && createPortal(<Popup />, overlaysEl)}
			{isLoading && createPortal(<Loader />, overlaysEl)}
		</>
	);
};

export default Overlays;
