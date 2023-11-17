import { ReactNode, createContext, useState } from 'react';

interface ILoaderContext {
	isLoading: boolean;
	setIsLoading: (bool: boolean) => void;
}

export const LoaderContext = createContext<ILoaderContext>({
	isLoading: false,
	setIsLoading: () => {}
});

const LoaderContextProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<LoaderContext.Provider value={{ setIsLoading, isLoading }}>
			{children}
		</LoaderContext.Provider>
	);
};

export default LoaderContextProvider;
