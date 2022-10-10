import { useEffect } from "react";
import { Header } from "../../components/Header";
import { StyledContainer } from "../../styles/components/container";
import {
	StyledHeadlineBold,
	StyledTitle1,
	StyledTitle3,
} from "../../styles/components/typography";
import { StyledSection } from "./style";

export const Dashboard = ({ user, setUser }) => {
	const logout = () => {
		setUser("");
		localStorage.clear();
	};

	useEffect(() => {
		return () => {
			if (
				!localStorage.getItem("@TOKEN") ||
				!localStorage.getItem("@USERID")
			) {
				window.location.replace("/");
			}
		};
	});

	return (
		<>
			<Header buttonDesc="Sair" buttonPath="/" logout={logout} />

			<StyledSection>
				<StyledContainer>
					<StyledTitle1 color="--color-grey-0">
						Olá, {user.name}
					</StyledTitle1>

					<StyledHeadlineBold color="--color-grey-1">
						{user.course_module}
					</StyledHeadlineBold>
				</StyledContainer>
			</StyledSection>

			<StyledSection>
				<StyledContainer>
					<StyledTitle1 color="--color-grey-0">
						Que pena! Estamos em desenvolvimento :(
					</StyledTitle1>

					<StyledTitle3 color="--color-grey-0">
						Nossa aplicação está em desenvolvimento, em breve
						teremos novidades
					</StyledTitle3>
				</StyledContainer>
			</StyledSection>
		</>
	);
};
