import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { StyledButtonDefault } from "../../styles/components/buttons";
import { StyledInput } from "../../styles/components/inputs";
import { StyledLabel, StyledTitle3 } from "../../styles/components/typography";
import { CustomSelect2 } from "../CustomSelect2";
import { StyledModal } from "./style";
import * as yup from "yup";
import { Api } from "../../services/axios";
import { toast } from "react-toastify";

export const Modal = ({ type, setModal, techInfo }) => {
	const { dropDownController, toasts, setUser, setLoading } =
		useContext(UserContext);

	const modalFormSchema = yup.object().shape({
		title: yup.string().required("Tecnologia é obrigatória"),
		status: yup.string().required("O status da tecnologia é obrigatório"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(modalFormSchema),
	});

	const { onChange, onBlur, name, ref } = register("status");

	toasts(errors);

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
		<StyledModal>
			{type === "add" ? (
				<div className="modalContainer">
					<div className="modalHeader">
						<StyledTitle3 color="--color-grey-0">
							Cadastrar Tecnologia
						</StyledTitle3>
						<button onClick={() => setModal(false)}>x</button>
					</div>

					<form onSubmit={handleSubmit(addTech)}>
						<div>
							<StyledLabel color="--color-grey-0" htmlFor="title">
								Nome
							</StyledLabel>

							<StyledInput
								id="title"
								placeholder="Digite o nome da tecnologia"
								{...register("title")}
							/>
						</div>

						<div>
							<StyledLabel
								color="--color-grey-0"
								htmlFor="selectLevel"
							>
								Selecionar status
							</StyledLabel>

							<CustomSelect2>
								<StyledInput
									type="text"
									id="selectLevel"
									placeholder="Selecione o status"
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
							</CustomSelect2>
						</div>

						<StyledButtonDefault color="--color-primary">
							Cadastrar Tecnologia
						</StyledButtonDefault>
					</form>
				</div>
			) : (
				<div className="modalContainer">
					<div className="modalHeader">
						<StyledTitle3 color="--color-grey-0">
							Editar Tecnologia
						</StyledTitle3>
						<button onClick={() => setModal(false)}>x</button>
					</div>

					<form onSubmit={handleSubmit(updateTech)}>
						<div>
							<StyledLabel color="--color-grey-0" htmlFor="title">
								Nome
							</StyledLabel>

							<StyledInput
								id="title"
								{...register("title")}
								value={techInfo.title}
								readOnly
							/>
						</div>

						<div>
							<StyledLabel
								color="--color-grey-0"
								htmlFor="selectLevel"
							>
								Alterar status
							</StyledLabel>

							<CustomSelect2>
								<StyledInput
									value={techInfo.status}
									type="text"
									id="selectLevel"
									placeholder="Selecione o status"
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
							</CustomSelect2>
						</div>

						<div className="editButtons">
							<StyledButtonDefault
								type="submit"
								color="--color-primary-disable"
							>
								Salvar Alterações
							</StyledButtonDefault>

							<StyledButtonDefault
								type="button"
								onClick={() => deleteTech()}
							>
								Excluir
							</StyledButtonDefault>
						</div>
					</form>
				</div>
			)}
		</StyledModal>
	);
};
