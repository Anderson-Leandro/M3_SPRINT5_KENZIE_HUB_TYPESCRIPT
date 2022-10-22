import { StyledLinkMedium } from "../../styles/components/links";
import { StyledHeader } from "./style";

interface HeaderProps {
	buttonDesc?: string;
	buttonPath?: string;
	logout?: () => void;
}

export const Header = ({
	buttonDesc = "",
	buttonPath = "",
	logout,
}: HeaderProps) => {
	return (
		<>
			{buttonDesc ? (
				<StyledHeader>
					<h1>Kenzie Hub</h1>

					<StyledLinkMedium
						to={buttonPath}
						onClick={() => logout && logout()}
					>
						{buttonDesc}
					</StyledLinkMedium>
				</StyledHeader>
			) : (
				<StyledHeader>
					<h1>Kenzie Hub</h1>
				</StyledHeader>
			)}
		</>
	);
};
