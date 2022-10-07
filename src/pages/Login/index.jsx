import { StyledContainer, StyledLogo } from "./style";
import {
	StyledHeadlineBold,
	StyledLabel,
	StyledTitle1,
} from "../../styles/components/typography";
import { StyledInput } from "../../styles/components/inputs";
import { StyledButtonDefault } from "../../styles/components/buttons";
import { Link } from "react-router-dom";
export const Login = () => {
	return (
		<>
			<StyledLogo>Kenzie Hub</StyledLogo>

			<StyledContainer>
				<StyledTitle1 color="--color-grey-0">Login</StyledTitle1>
				<div>
					<StyledLabel color="--color-grey-0">Email</StyledLabel>
					<StyledInput placeholder="Digite aqui seu nome" />
				</div>

				<div>
					<StyledLabel color="--color-grey-0">Senha</StyledLabel>
					<StyledInput placeholder="Digite aqui sua senha" />
				</div>

				<StyledButtonDefault color="--color-primary">
					Entrar
				</StyledButtonDefault>

				<StyledHeadlineBold color="--color-grey-1">
					Ainda não possui uma conta?
				</StyledHeadlineBold>

				<Link to="/register">
					<StyledButtonDefault>Cadastre-se</StyledButtonDefault>
				</Link>
			</StyledContainer>
		</>
	);
};
