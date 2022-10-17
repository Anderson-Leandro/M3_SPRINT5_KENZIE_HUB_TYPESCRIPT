import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../services/axios";
import * as yup from "yup";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState("");

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	function toasts(errors) {
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
		toast.info(errors.title?.message, {
			autoClose: 1500,
		});
		toast.info(errors.status?.message, {
			autoClose: 1500,
		});
	}

	// Register

	async function apiRegister(data) {
		setLoading(true);

		try {
			await Api.post("/users", data);

			toast.success("Cadastro realizado com sucesso!", {
				autoClose: 1500,
			});

			navigate("/");
		} catch (error) {
			toast.error(error.response.data.message, {
				autoClose: 1500,
			});
		}
		setLoading(false);
	}

	const registerFormSchema = yup.object().shape({
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

	function dropDownController() {
		document
			.querySelector("#selectDropDown")
			.classList.toggle("displayNone");
	}

	// Login

	const loginFormSchema = yup.object().shape({
		email: yup
			.string()
			.required("O email é obrigatório")
			.email("Digite um email válido"),
		password: yup.string().required("A senha é obrigatória"),
	});

	async function apiLogin(data) {
		setLoading(true);
		try {
			const resp = await Api.post("/sessions", data);

			setUser(resp.data.user);
			localStorage.setItem("@TOKEN", resp.data.token);
			navigate("/dashboard");
		} catch (error) {
			toast.error(error.response.data.message, {
				autoClose: 1500,
			});
		}
		setLoading(false);
	}

	// novas funções

	useEffect(() => {
		async function getUser() {
			setLoading(true);
			try {
				const token = localStorage.getItem("@TOKEN");

				Api.defaults.headers.authorization = `Bearer ${token}`;

				const { data } = await Api.get("/profile");

				setUser(data);

				navigate("/dashboard", { replace: true });
			} catch (error) {
				localStorage.clear();

				navigate("/", { replace: true });
			}
			setLoading(false);
		}

		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<UserContext.Provider
			value={{
				toasts,
				user,
				setUser,
				navigate,
				apiRegister,
				dropDownController,
				registerFormSchema,
				loginFormSchema,
				apiLogin,
				loading,
				setLoading,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
