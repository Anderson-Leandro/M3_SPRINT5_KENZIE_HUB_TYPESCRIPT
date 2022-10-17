import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Api } from "../../services/axios";
import { UserContext } from "../UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
	const { setUser, setLoading } = useContext(UserContext);

	const [modal, setModal] = useState(false);

	const [modalType, setModalType] = useState("");

	const [techInfo, setTechInfo] = useState("");

	const modalFormSchema = yup.object().shape({
		title: yup.string().required("Tecnologia é obrigatória"),
		status: yup.string().required("O status da tecnologia é obrigatório"),
	});

	async function addTech(techData) {
		setLoading(true);
		try {
			await Api.post("/users/techs", techData);
			setModal(false);
			const { data } = await Api.get("/profile");
			setUser(data);
		} catch (error) {
			console.error(error);
			toast.error(error.response.data.message, { autoClose: 1500 });
		}
		setLoading(false);
	}

	async function updateTech(techData) {
		setLoading(true);
		try {
			await Api.put(`/users/techs/${techInfo.id}`, techData);
			setModal(false);
			const { data } = await Api.get("/profile");
			setUser(data);
		} catch (error) {
			console.error(error);
			toast.error(error.response.data.message, { autoClose: 1500 });
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
			toast.error(error.response.data.message, { autoClose: 1500 });
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
