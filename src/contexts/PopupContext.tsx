import { ReactNode, createContext, useState } from 'react';
import { PopupMessage } from '../utils/popupMessagesConstant';

interface IPopupContext {
	isPopupOpen: boolean;
	openPopup: (messages: PopupMessage) => void;
	closePopup: () => void;
	popupMessages: {
		title: string;
		message: string;
	};
}

export const PopupContext = createContext<IPopupContext>({
	isPopupOpen: false,
	openPopup: () => {},
	closePopup: () => {},
	popupMessages: {
		title: '',
		message: ''
	}
});

const PopupContextProvider = ({ children }: { children: ReactNode }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [popupMessages, setPopupMessages] = useState({
		title: '',
		message: ''
	});

	const openPopup = (messages: PopupMessage) => {
		setIsPopupOpen(true);
		setPopupMessages({
			title: messages.title,
			message: messages.message
		});
	};

	const closePopup = () => {
		setIsPopupOpen(false);
	};
	return (
		<PopupContext.Provider
			value={{ isPopupOpen, openPopup, closePopup, popupMessages }}
		>
			{children}
		</PopupContext.Provider>
	);
};

export default PopupContextProvider;
