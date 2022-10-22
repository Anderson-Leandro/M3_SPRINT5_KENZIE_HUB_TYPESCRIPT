import {
	StyledHeadlineBold,
	StyledLabel,
	StyledTitle1,
} from "../../styles/components/typography";
import { StyledInput } from "../../styles/components/inputs";
import { StyledButtonDefault } from "../../styles/components/buttons";
import { Header } from "../../components/Header";
import { StyledFormContainer } from "../../styles/components/formContainer";
import { StyledContainer } from "../../styles/components/container";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledLinkDefault } from "../../styles/components/links";
import { useContext } from "react";
import { ILoginFormSchema, UserContext } from "../../contexts/UserContext";

export const Login = () => {
	const { loginFormSchema, apiLogin, toasts } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginFormSchema>({
		resolver: yupResolver(loginFormSchema),
	});

	toasts(errors);

	return (
		<>
			<Header />

			<StyledContainer>
				<StyledFormContainer>
					<StyledTitle1 color="--color-grey-0">Login</StyledTitle1>
					<form onSubmit={handleSubmit(apiLogin)}>
						<div>
							<StyledLabel color="--color-grey-0">
								Email
							</StyledLabel>
							<StyledInput
								placeholder="Digite aqui seu nome"
								{...register("email")}
							/>
						</div>

						<div>
							<StyledLabel color="--color-grey-0">
								Senha
							</StyledLabel>
							<StyledInput
								type="password"
								placeholder="Digite aqui sua senha"
								{...register("password")}
							/>
						</div>

						<StyledButtonDefault color="--color-primary">
							Entrar
						</StyledButtonDefault>
					</form>

					<StyledHeadlineBold color="--color-grey-1">
						Ainda não possui uma conta?
					</StyledHeadlineBold>

					<StyledLinkDefault to="/register">
						Cadastre-se
					</StyledLinkDefault>
				</StyledFormContainer>
			</StyledContainer>
		</>
	);
};
