import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Api } from "../../services/axios";
import { ICatchError, UserContext } from "../UserContext";

interface ITechProviderProps {
	children: ReactNode;
}

export interface IModalFormSchema {
	title: string;
	status: string;
}

interface ITechInfo {
	id: string;
	title: string;
	status: string;
}

interface ICreateContext {
	modalFormSchema: yup.SchemaOf<IModalFormSchema>;
	addTech: (techData: IModalFormSchema) => Promise<void>;
	updateTech: (techData: IModalFormSchema) => Promise<void>;
	deleteTech: () => Promise<void>;
	techInfo: ITechInfo;
	modal: boolean;
	modalType: string;
	setModal: Dispatch<SetStateAction<boolean>>;
	setModalType: Dispatch<SetStateAction<string>>;
	setTechInfo: Dispatch<SetStateAction<ITechInfo>>;
}

export const TechContext = createContext<ICreateContext>({} as ICreateContext);

export const TechProvider = ({ children }: ITechProviderProps) => {
	const { setUser, setLoading } = useContext(UserContext);

	const [modal, setModal] = useState(false);

	const [modalType, setModalType] = useState("");

	const [techInfo, setTechInfo] = useState<ITechInfo>({} as ITechInfo);

	const modalFormSchema: yup.SchemaOf<IModalFormSchema> = yup.object().shape({
		title: yup.string().required("Tecnologia é obrigatória"),
		status: yup.string().required("O status da tecnologia é obrigatório"),
	});

	async function addTech(techData: IModalFormSchema) {
		setLoading(true);
		try {
			await Api.post("/users/techs", techData);
			setModal(false);
			const { data } = await Api.get("/profile");
			setUser(data);
		} catch (error) {
			console.error(error);
			toast.error((error as ICatchError).response.data.message, {
				autoClose: 1500,
			});
		}
		setLoading(false);
	}

	async function updateTech(techData: IModalFormSchema) {
		setLoading(true);
		try {
			await Api.put(`/users/techs/${techInfo.id}`, techData);
			setModal(false);
			const { data } = await Api.get("/profile");
			setUser(data);
		} catch (error) {
			console.error(error);
			toast.error((error as ICatchError).response.data.message, {
				autoClose: 1500,
			});
		}
		setLoading(false);
	}

	async function deleteTech() {
		setLoading(true);
		try {
			await Api.delete(`/users/techs/${techInfo.id}`);
			const { data } = await Api.get("/profile");
			setUser(data);
			setModal(false);
		} catch (error) {
			console.error(error);
			toast.error((error as ICatchError).response.data.message, {
				autoClose: 1500,
			});
		}
		setLoading(false);
	}

	return (
		<TechContext.Provider
			value={{
				modalFormSchema,
				addTech,
				updateTech,
				deleteTech,
				setModal,
				techInfo,
				modal,
				modalType,
				setModalType,
				setTechInfo,
			}}
		>
			{children}
		</TechContext.Provider>
	);
};
