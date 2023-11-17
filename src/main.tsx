import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Overlays from './Overlays/Overlays';
import LoaderContextProvider from './contexts/LoaderContext';
import PopupContextProvider from './contexts/PopupContext';
import './index.css';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PopupContextProvider>
			<LoaderContextProvider>
				<RouterProvider router={router} />
				<Overlays />
			</LoaderContextProvider>
		</PopupContextProvider>
	</React.StrictMode>
);
