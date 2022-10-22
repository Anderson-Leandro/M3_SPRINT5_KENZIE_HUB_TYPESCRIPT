import { ReactNode } from "react";
import { TechProvider } from "../../contexts/TechContext";
import { UserProvider } from "../../contexts/UserContext";

interface IProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
	return (
		<>
			<UserProvider>
				<TechProvider>{children}</TechProvider>
			</UserProvider>
		</>
	);
};
