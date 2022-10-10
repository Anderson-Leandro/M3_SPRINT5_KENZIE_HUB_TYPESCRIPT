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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../services/axios/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledLinkDefault } from "../../styles/components/links";

export const Login = ({ setUser }) => {
	const formSchema = yup.object().shape({
		email: yup
			.string()
			.required("O email é obrigatório")
			.email("Digite um email válido"),
		password: yup.string().required("A senha é obrigatória"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const navigate = useNavigate();

	const apiLogin = (data) => {
		Api.post("/sessions", data)
			.then((resp) => {
				setUser(resp.data.user);
				localStorage.setItem("@TOKEN", resp.data.token);
				localStorage.setItem("@USERID", resp.data.user.id);
				navigate("/dashboard");
			})
			.catch((err) => {
				toast.error(err.response.data.message, {
					autoClose: 1500,
				});
			});
	};

	toast.info(errors.email?.message, {
		autoClose: 1500,
	});
	toast.info(errors.password?.message, {
		autoClose: 1500,
	});

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
