import { CustomSelect } from "../../components/CustomSelect";
import {
	StyledButtonDefault,
	StyledButtonMedium,
} from "../../styles/components/buttons";
import { StyledInput } from "../../styles/components/inputs";
import {
	StyledHeadline,
	StyledLabel,
	StyledTitle1,
} from "../../styles/components/typography";
import { StyledContainer, StyledLogo } from "./style";

export const Register = () => {
	return (
		<>
			<StyledLogo>
				<h1>Kenzie Hub</h1>

				<StyledButtonMedium>Voltar</StyledButtonMedium>
			</StyledLogo>

			<StyledContainer>
				<StyledTitle1 color="--color-grey-0">
					Crie sua conta
				</StyledTitle1>

				<StyledHeadline color="--color-grey-1">
					Rapido e grátis, vamos nessa
				</StyledHeadline>

				<form>
					<div>
						<StyledLabel color="--color-grey-0">Nome</StyledLabel>
						<StyledInput placeholder="Digite aqui seu nome" />
					</div>

					<div>
						<StyledLabel color="--color-grey-0">Email</StyledLabel>
						<StyledInput placeholder="Digite aqui seu email" />
					</div>

					<div>
						<StyledLabel color="--color-grey-0">Senha</StyledLabel>
						<StyledInput placeholder="Digite aqui sua senha" />
					</div>

					<div>
						<StyledLabel color="--color-grey-0">
							Confirmar Senha
						</StyledLabel>
						<StyledInput placeholder="Digite novamente sua senha" />
					</div>

					<div>
						<StyledLabel color="--color-grey-0">Bio</StyledLabel>
						<StyledInput placeholder="Fale sobre você" />
					</div>

					<div>
						<StyledLabel color="--color-grey-0">
							Contato
						</StyledLabel>
						<StyledInput placeholder="Opção de contato" />
					</div>

					<div>
						<StyledLabel color="--color-grey-0">
							Selecionar módulo
						</StyledLabel>

						<CustomSelect></CustomSelect>
					</div>

					<StyledButtonDefault color="--color-primary-disable">
						Cadastrar
					</StyledButtonDefault>
				</form>
			</StyledContainer>
		</>
	);
};
