import { StyledLinkMedium } from "../../styles/components/links";
import { StyledHeader } from "./style";

export const Header = ({
	buttonDesc = false,
	buttonPath = "",
	logout = false,
}) => {
	return (
		<>
			{buttonDesc ? (
				<StyledHeader>
					<h1>Kenzie Hub</h1>

					<StyledLinkMedium to={buttonPath} onClick={() => logout()}>
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
