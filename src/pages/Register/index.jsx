import { CustomSelect } from "../../components/CustomSelect";
import { StyledButtonDefault } from "../../styles/components/buttons";
import { StyledInput } from "../../styles/components/inputs";
import {
	StyledHeadline,
	StyledLabel,
	StyledTitle1,
} from "../../styles/components/typography";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "../../components/Header";
import { StyledFormContainer } from "../../styles/components/formContainer";
import { StyledContainer } from "../../styles/components/container";
import "./style.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Register = () => {
	const { apiRegister, dropDownController, registerFormSchema, toasts } =
		useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(registerFormSchema),
	});

	toasts(errors);

	const { onChange, onBlur, name, ref } = register("course_module");

	return (
		<>
			<div className="headerContainer">
				<Header buttonDesc="Voltar" buttonPath="/" />
			</div>

			<StyledContainer>
				<StyledFormContainer>
					<StyledTitle1 color="--color-grey-0">
						Crie sua conta
					</StyledTitle1>

					<StyledHeadline color="--color-grey-1">
						Rapido e grátis, vamos nessa
					</StyledHeadline>

					<form onSubmit={handleSubmit(apiRegister)}>
						<div>
							<StyledLabel color="--color-grey-0">
								Nome
							</StyledLabel>
							<StyledInput
								placeholder="Digite aqui seu nome"
								{...register("name")}
							/>
						</div>

						<div>
							<StyledLabel color="--color-grey-0">
								Email
							</StyledLabel>
							<StyledInput
								placeholder="Digite aqui seu email"
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

						<div>
							<StyledLabel color="--color-grey-0">
								Confirmar Senha
							</StyledLabel>
							<StyledInput
								type="password"
								placeholder="Digite novamente sua senha"
								{...register("confirmPassword")}
							/>
						</div>

						<div>
							<StyledLabel color="--color-grey-0">
								Bio
							</StyledLabel>
							<StyledInput
								placeholder="Fale sobre você"
								{...register("bio")}
							/>
						</div>

						<div>
							<StyledLabel color="--color-grey-0">
								Contato
							</StyledLabel>
							<StyledInput
								placeholder="Opção de contato"
								{...register("contact")}
							/>
						</div>

						<div>
							<StyledLabel color="--color-grey-0">
								Selecionar módulo
							</StyledLabel>

							<CustomSelect>
								<StyledInput
									type="text"
									id="selectModulo"
									placeholder="Selecione o módulo"
									onFocus={dropDownController}
									autoComplete="off"
									onChange={onChange}
									name={name}
									ref={ref}
									onBlur={(event) => {
										onBlur(event);
										dropDownController();
									}}
								/>
							</CustomSelect>
						</div>

						<StyledButtonDefault
							type="submit"
							color="--color-primary-disable"
						>
							Cadastrar
						</StyledButtonDefault>
					</form>
				</StyledFormContainer>
			</StyledContainer>
		</>
	);
};
