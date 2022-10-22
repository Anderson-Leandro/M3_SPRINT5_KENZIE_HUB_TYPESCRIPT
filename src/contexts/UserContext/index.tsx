import { createContext, useEffect, useState, ReactNode } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../services/axios";
import * as yup from "yup";

interface ICreateContext {
	toasts: (errors: IErrors) => void;
	user: IUser;
	setUser: React.Dispatch<React.SetStateAction<IUser>>;
	navigate: NavigateFunction;
	apiRegister: (data: IRegisterData) => Promise<void>;
	dropDownController: () => void;
	registerFormSchema: yup.SchemaOf<IRegisterFormSchema>;
	loginFormSchema: yup.SchemaOf<ILoginFormSchema>;
	apiLogin: (data: ILoginFormSchema) => Promise<void>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IRegisterFormSchema {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	bio: string;
	contact: string;
	course_module: string;
}

export interface ILoginFormSchema {
	email: string;
	password: string;
}

interface UserProviderProps {
	children: ReactNode;
}

interface IErrors {
	name?: {
		message?: string;
	};
	email?: {
		message?: string;
	};
	password?: {
		message?: string;
	};
	confirmPassword?: {
		message?: string;
	};
	bio?: {
		message?: string;
	};
	contact?: {
		message?: string;
	};
	course_module?: {
		message?: string;
	};
	title?: {
		message?: string;
	};
	status?: {
		message?: string;
	};
}

interface IRegisterData {
	email: string;
	password: string;
	name: string;
	bio: string;
	contact: string;
	course_module: string;
}

export interface ICatchError {
	response: {
		data: {
			message: string;
		};
	};
}

export interface IUser {
	id: string;
	name: string;
	email: string;
	course_module: string;
	bio: string;
	contact: string;
	techs: Itech[];
	works: IWorks[];
}

interface Itech {
	id: string;
	title: string;
	status: string;
	created_at: string;
	updated_at: string;
}

interface IWorks {
	id: string;
	title: string;
	description: string;
	deploy_url: string;
	created_at: string;
	updated_at: string;
}

export const UserContext = createContext<ICreateContext>({} as ICreateContext);

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<IUser>({} as IUser);

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	function toasts(errors: IErrors): void {
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

	async function apiRegister(data: IRegisterData): Promise<void> {
		setLoading(true);

		try {
			await Api.post("/users", data);

			toast.success("Cadastro realizado com sucesso!", {
				autoClose: 1500,
			});

			navigate("/");
		} catch (error) {
			toast.error((error as ICatchError).response.data.message, {
				autoClose: 1500,
			});
		}
		setLoading(false);
	}

	const registerFormSchema: yup.SchemaOf<IRegisterFormSchema> = yup
		.object()
		.shape({
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
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#+-,.;])[0-9a-zA-Z$*&@#+-,.;]{8,}$/,
					"A senha não é segura"
				),
			confirmPassword: yup
				.string()
				.required("A confirmação de senha é obrigatória")
				.oneOf([yup.ref("password")], "As senhas devem ser iguais"),
			bio: yup
				.string()
				.required("Informações sobre você são obrigatórias"),
			contact: yup
				.string()
				.required("Informação de contato é obrigatória"),
			course_module: yup
				.string()
				.required("É necessário escolher um módulo"),
		});

	function dropDownController(): void {
		(
			document.querySelector("#selectDropDown") as HTMLDivElement
		).classList.toggle("displayNone");
	}

	// Login

	const loginFormSchema: yup.SchemaOf<ILoginFormSchema> = yup.object().shape({
		email: yup
			.string()
			.required("O email é obrigatório")
			.email("Digite um email válido"),
		password: yup.string().required("A senha é obrigatória"),
	});

	async function apiLogin(data: ILoginFormSchema): Promise<void> {
		setLoading(true);
		try {
			const resp = await Api.post("/sessions", data);

			setUser(resp.data.user);
			localStorage.setItem("@TOKEN", resp.data.token);
			navigate("/dashboard");
		} catch (error) {
			toast.error((error as ICatchError).response.data.message, {
				autoClose: 1500,
			});
		}
		setLoading(false);
	}

	// novas funções

	useEffect(() => {
		async function getUser(): Promise<void> {
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
