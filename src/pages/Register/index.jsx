import { CustomSelect } from "../../components/CustomSelect";
import { StyledButtonDefault } from "../../styles/components/buttons";
import { StyledInput } from "../../styles/components/inputs";
import {
	StyledHeadline,
	StyledLabel,
	StyledTitle1,
} from "../../styles/components/typography";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../services/axios/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { StyledFormContainer } from "../../styles/components/formContainer";
import { StyledContainer } from "../../styles/components/container";
import "./style.css";

export const Register = () => {
	const formSchema = yup.object().shape({
		name: yup.string().required("O nome é obrigatório"),
		email: yup
			.string()
			.required("O email é obrigatório")
			.email("Digite um email válido"),
		password: yup
			.string()
			.required("A senha é obrigatória")
			.min(8, "A senha de ter no monimo 8 caracteres")
			.matches(
				"^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#+-,.;])[0-9a-zA-Z$*&@#+-,.;]{8,}$",
				"A senha não é segura"
			),
		confirmPassword: yup
			.string()
			.required("A confirmação de senha é obrigatória")
			.oneOf([yup.ref("password")], "As senhas devem ser iguais"),
		bio: yup.string().required("Informações sobre você são obrigatórias"),
		contact: yup.string().required("Informação de contato é obrigatória"),
		course_module: yup.string().required("É necessário escolher um módulo"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const navigate = useNavigate();

	const { onChange, onBlur, name, ref } = register("course_module");

	const apiRegister = (data) => {
		console.log(data);
		Api.post("/users", data)
			.then((resp) => {
				toast.success("Cadastro realizado com sucesso!", {
					autoClose: 2000,
				});

				navigate("/");
			})
			.catch((err) => {
				toast.error(err.response.data.message, {
					autoClose: 2000,
				});
			});
	};

	function dropDownController() {
		document
			.querySelector("#selectDropDown")
			.classList.toggle("displayNone");
	}

	toast.info(errors.name?.message, {
		autoClose: 1500,
	});
	toast.info(errors.email?.message, {
		autoClose: 1500,
	});
	toast.info(errors.password?.message, {
		autoClose: 1500,
	});
	toast.info(errors.confirmPassword?.message, {
		autoClose: 1500,
	});
	toast.info(errors.bio?.message, {
		autoClose: 1500,
	});
	toast.info(errors.contact?.message, {
		autoClose: 1500,
	});
	toast.info(errors.course_module?.message, {
		autoClose: 1500,
	});

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
								placeholder="Digite aqui sua senha"
								{...register("password")}
							/>
						</div>

						<div>
							<StyledLabel color="--color-grey-0">
								Confirmar Senha
							</StyledLabel>
							<StyledInput
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
